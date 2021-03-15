import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CounterResult } from '../types/counter';

@Injectable({
  providedIn: 'root'
})
export class CounterApiService {
  private urlCounter = 'api/count';
  constructor(private http: HttpClient) {  }

  get(): Observable<CounterResult> {
    return this.http.get<CounterResult>(this.urlCounter);
  }
}

