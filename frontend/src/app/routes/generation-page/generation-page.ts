import {Component, model, ModelSignal, OnInit} from '@angular/core';
import {RandomPhraseApiService} from '../../shared/api/random-phrase-api.service';
import {Navbar} from '../../shared/layout/navbar/navbar';
import {ChainContainer} from '../../shared/components/chain-container/chain-container';
import {SettingsDialog} from './settings-dialog/settings-dialog';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

export interface phraseNumsModel {
  numberOfChains: number,
  numberOfPhrasesPerChain: number
}

@Component({
  selector: 'app-generation-page',
  imports: [
    Navbar,
    ChainContainer,
    SettingsDialog
  ],
  templateUrl: './generation-page.html',
  styleUrl: './generation-page.sass',
})
export class GenerationPage implements OnInit {
  generatedChains: string[] = []
  numberOfPhrasesPerChain: number = 5;
  numberOfChains: number = 6;
  phraseNums: ModelSignal<phraseNumsModel> = model({numberOfChains: this.numberOfChains, numberOfPhrasesPerChain: this.numberOfPhrasesPerChain});
  isSettingsDialogOpen: boolean = false;
  downloadJsonHref: SafeUrl | undefined;

  constructor(private randomPhraseApiService: RandomPhraseApiService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.initChains()
    setTimeout(()=> {
      this.downloadJsonHref = this.generateDownloadJsonUri();
    }, 1000);

    this.phraseNums.subscribe(newValue => {
      this.numberOfChains = newValue.numberOfChains;
      this.numberOfPhrasesPerChain = newValue.numberOfPhrasesPerChain;
      this.initChains();

      setTimeout(()=> {
        this.downloadJsonHref = this.generateDownloadJsonUri();
      }, 1000);
    });
  }

  initChains() {
    this.generatedChains = []

    this.randomPhraseApiService.getArrayOfPhrases(this.numberOfChains, this.numberOfPhrasesPerChain).subscribe({
      next: (data: string[][]) => {
        for (let i = 0; i < this.numberOfChains; i++) {
          this.generatedChains![i] = data[i].join("-")
        }
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  onToggleSettings() {
    this.isSettingsDialogOpen = !this.isSettingsDialogOpen;
  }

  generateDownloadJsonUri() {
    const jsonObject = JSON.stringify(
      this.generatedChains.map(function(s: string) {
        return {chain: s}
      })
    );

    console.warn(jsonObject)
    return this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(jsonObject));
  }
}
