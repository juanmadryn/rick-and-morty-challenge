import { Component, OnInit } from '@angular/core';
import { CounterApiService } from '../services/counterAPI.service';
import { EpisodesApiService } from '../services/episodesAPI.service';
import { CounterResult, Counters } from '../types/counter';
import { EpisodesResult } from '../types/episodes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  title = "Chipax's Rick And Morty Challenge";

  countersData: CounterResult = {counters: {countOfCInCharactersName:0, countOfLInLocationsName: 0, countOfEInEpisodesName: 0}, timeOfExecution: ""};

  episodesData: EpisodesResult = {episodes: [],timeOfExecution: ''};

  constructor(
    private counterService: CounterApiService,
    private episodesService: EpisodesApiService
  ) {}

  ngOnInit(): void {
    this.counterService.get().subscribe((data) => {
      this.countersData = <CounterResult> data;
    });

    this.episodesService.get().subscribe((data) => {
      this.episodesData = <EpisodesResult> data;
    });
  }

}
