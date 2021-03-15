import { request, gql } from "graphql-request";
import { Locations,  LocationFromApi } from "../types/locations";
import endpoints from "../config/endpoints.config";
import ServiceInterface from "./service_interface";

export default class LocationsService implements ServiceInterface {
  range = (start: number, end: number) => {
    const length = 1 + end - start;
    return Array.from({ length }, (_, i) => start + i);
  };

  findLocationsByCharQuery = gql`
    query($page: Int!, $name: String!) {
      locations(page: $page, filter: { name: $name }) {
        info {
          pages
        }
        results {
          name
        }
      }
    }
  `;

  async findByChar(char: string): Promise<LocationFromApi[]> {
    const firstPage = await request<Locations>(
      endpoints.RICK_AND_MORTY_API_URL,
      this.findLocationsByCharQuery,
      {
        page: 1,
        name: char,
      }
    );

    const remainingPages = await Promise.all(
      this.range(2, firstPage.locations.info.pages).map((page) => {
        return request<Locations>(
          endpoints.RICK_AND_MORTY_API_URL,
          this.findLocationsByCharQuery,
          { page: page, name: char }
        );
      })
    );

    let allLocation = firstPage.locations.results.concat(
      remainingPages.reduce((prev, next) => {
        return prev.concat(next.locations.results);
      }, <LocationFromApi[]>[])
    );

    return allLocation;
  }
}
