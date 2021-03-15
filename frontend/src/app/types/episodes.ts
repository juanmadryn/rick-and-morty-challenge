export type EpisodesData = {
  name: string;
  locations: string[];
};

export type EpisodesResult = {
  episodes: EpisodesData[],
  timeOfExecution: string
}
