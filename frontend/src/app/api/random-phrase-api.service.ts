import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RandomPhraseApiService {
  constructor(private http: HttpClient) { }

  getRandomPhrases(numberOfPhrases: number): Observable<string[]> {
    return this.http.get<string[]>(`https://random-word-api.herokuapp.com/word?number=${numberOfPhrases}&lang=de`)
  }
}
