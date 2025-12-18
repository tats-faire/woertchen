import {Component, OnInit} from '@angular/core';
import {RandomPhraseApiService} from '../../shared/api/random-phrase-api.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [
    RouterLink
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.sass',
})
export class LandingPage implements OnInit {
  heroPhrase: string | undefined

  constructor(private randomPhraseApiService: RandomPhraseApiService) {
  }

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
