import {Component, OnInit} from '@angular/core';
import {RandomPhraseApiService} from '../../api/random-phrase-api.service';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.sass',
})
export class LandingPage implements OnInit {
  heroPhrase: string | undefined

  constructor(private randomPhraseApiService: RandomPhraseApiService) {}

  ngOnInit() {
    this.randomPhraseApiService.getRandomPhrases(4).subscribe({
      next: (data) => {
        this.heroPhrase = data.join("-")
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
