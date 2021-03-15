import { LocationFromApi } from "./locations";
import { Page } from "./page";

export type CharacterFromApi = {
  name: string;
  origin: LocationFromApi;
};

export type Characters = {
  characters: {
    info: Page;
    results: CharacterFromApi[];
  };
};
