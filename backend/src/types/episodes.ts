import { Page } from "./page";
import { CharacterFromApi } from "./characters";

export type EpisodeFromApi = {
  id: string;
  name: string;
  episode: string;
  characters: CharacterFromApi[];
};

export type Episodes = {
  episodes: {
    info: Page;
    results: EpisodeFromApi[];
  };
};

export type EpisodesData = {
  name: string;
  locations: string[];
};

export type EpisodesResult = {
  episodes: EpisodesData[],
  timeOfExecution: string
}
