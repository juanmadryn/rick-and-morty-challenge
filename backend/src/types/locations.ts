import { Page } from "./page";

export type LocationFromApi = {
    id: string;
    name: string;
};

export type Locations = {
    locations: {
      info: Page;
      results: LocationFromApi[];
    };
  };