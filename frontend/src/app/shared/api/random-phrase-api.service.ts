import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, concatAll, firstValueFrom, map, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RandomPhraseApiService {
  constructor(private http: HttpClient) { }

  transform() {
    return this.getRandomPhrases(4).subscribe({
      next: (data) => {
        return data.join("-")
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  getRandomPhrases(numberOfPhrases: number): Observable<string[]> {
    return this.http.get<string[]>(`/api/word?number=${numberOfPhrases}&lang=de`)
  }

  getArrayOfPhrases(numberOfChains: number, numberOfPhrasesPerChain: number) {
    const totalPhrases = numberOfChains * numberOfPhrasesPerChain

    return this.http.get<string[]>(`/api/word?number=${totalPhrases}&lang=de`).pipe(
      map((response) => this.splitArray(response, numberOfPhrasesPerChain, numberOfChains)),

      catchError((error) => {
        console.error(error);
        return of([]);
      })
    );
  }

  splitArray(array: string[], splitIndex: number) {
    const result = [];
    for (let i = 0; i < array.length; i += splitIndex) {
      result.push(array.slice(i, i + splitIndex));
    }
    return result;
  }
}
