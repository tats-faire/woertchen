import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, concatAll, firstValueFrom, map, Observable, of} from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root',
})
export class RandomPhraseApiService {
  constructor(private http: HttpClient) { }

  getRandomPhrases(numberOfPhrases: number): Observable<string[]> {
    return this.http.get<string[]>(`${environment.apiUrl}/api/word?number=${numberOfPhrases}&lang=de`)
  }

  getArrayOfPhrases(numberOfChains: number, numberOfPhrasesPerChain: number) {
    const totalPhrases = numberOfChains * numberOfPhrasesPerChain

    return this.http.get<string[]>(`${environment.apiUrl}/api/word?number=${totalPhrases}&lang=de`).pipe(
      map((response) => this.splitArray(response, numberOfPhrasesPerChain, numberOfChains)),

      catchError((error) => {
        console.error(error);
        return of([]);
      })
    );
  }

  splitArray(array: string[], splitIndex: number, cols: number) {
    let result = [];

    // init array
    for ( let i = 0; i < cols; i++ ) {
      result[i] = [];
    }

    // fill chains
    for (let i = 0, j = 0; i < array.length; i += splitIndex, j++) {
      result[j] = (array.slice(i, i + splitIndex));
    }
    return result;
  }
}
