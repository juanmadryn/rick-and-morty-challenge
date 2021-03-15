import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EpisodesResult } from '../types/episodes';

@Injectable({
  providedIn: 'root'
})
export class EpisodesApiService {
  private urlCounter = 'api/episodes';
  constructor(private http: HttpClient) {  }

  get(): Observable<EpisodesResult> {
    return this.http.get<EpisodesResult>(this.urlCounter);
  }
}

