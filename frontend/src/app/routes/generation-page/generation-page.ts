import {Component, model, OnInit, signal, WritableSignal} from '@angular/core';
import {RandomPhraseApiService} from '../../shared/api/random-phrase-api.service';
import {Navbar} from '../../shared/layout/navbar/navbar';
import {ChainContainer} from '../../shared/components/chain-container/chain-container';
import {SettingsDialog} from './settings-dialog/settings-dialog';

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
  generatedChains: string[] | undefined;
  numberOfChains: number;
  // numberOfChains2: WritableSignal<number> = signal(6)
  numberOfChains3 = model(6);
  numberOfPhrasesPerChain: number;
  numberOfPhrasesPerChain3 = model(5)

  // numberOfPhrasesPerChain2: WritableSignal<number> = signal(5);
  isSettingsDialogOpen: boolean = false;

  constructor(private randomPhraseApiService: RandomPhraseApiService) {
    this.numberOfChains = 6;
    this.numberOfPhrasesPerChain = 5;
    // this.numberOfPhrasesPerChain2.set(5);

  }

  ngOnInit() {
    console.warn(this.numberOfPhrasesPerChain)
    this.initChains()
  }

  initChains() {
    this.generatedChains = []
    this.randomPhraseApiService.getArrayOfPhrases(this.numberOfChains, this.numberOfPhrasesPerChain).subscribe({
      next: (data: string[][]) => {
        for (let i = 0; i < this.numberOfChains; i++) {
          console.warn("i is ", i)
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
}
