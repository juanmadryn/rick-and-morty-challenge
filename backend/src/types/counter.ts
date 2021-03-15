export type Counters = {
  countOfEInEpisodesName: number,
  countOfLInLocationsName: number,
  countOfCInCharactersName: number
};

export type CounterResult = {
  counters: Counters,
  timeOfExecution: string
};
