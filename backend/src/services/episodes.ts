import { request, gql } from "graphql-request";
import { Episodes, EpisodeFromApi } from "../types/episodes";
import endpoints from "../config/endpoints.config";
import ServiceInterface from "./service_interface";

export default class EpisodeService implements ServiceInterface {
  range = (start: number, end: number) => {
    const length = 1 + end - start;
    return Array.from({ length }, (_, i) => start + i);
  };

  findEpisodesByCharQuery = gql`
    query($page: Int!, $name: String!) {
      episodes(page: $page, filter: { name: $name }) {
        info {
          pages
        }
        results {
          name
        }
      }
    }
  `;

  findAllEpisodesQuery = gql`
    query($page: Int!) {
      episodes(page: $page) {
        info {
          pages
        }
        results {
          name
          characters {
            origin {
              name
            }
          }
        }
      }
    }
  `;

  async findByChar(char: string): Promise<EpisodeFromApi[]> {
    const firstPage = await request<Episodes>(
      endpoints.RICK_AND_MORTY_API_URL,
      this.findEpisodesByCharQuery,
      {
        page: 1,
        name: char,
      }
    );

    const remainingPages = await Promise.all(
      this.range(2, firstPage.episodes.info.pages).map((page) => {
        return request<Episodes>(
          endpoints.RICK_AND_MORTY_API_URL,
          this.findEpisodesByCharQuery,
          { page: page, name: char }
        );
      })
    );

    const allEpisodes = firstPage.episodes.results.concat(
      remainingPages.reduce((prev, next) => {
        return prev.concat(next.episodes.results);
      }, <EpisodeFromApi[]>[])
    );

    return allEpisodes;
  }

  async findAll(): Promise<EpisodeFromApi[]> {
    const firstPage = await request<Episodes>(
      endpoints.RICK_AND_MORTY_API_URL,
      this.findAllEpisodesQuery,
      { page: 1 }
    );

    const remainingPages = await Promise.all(
      this.range(2, firstPage.episodes.info.pages).map((page) => {
        return request<Episodes>(
          endpoints.RICK_AND_MORTY_API_URL,
          this.findAllEpisodesQuery,
          { page: page }
        );
      })
    );

    const allEpisodes = firstPage.episodes.results.concat(
      remainingPages.reduce((prev, next) => {
        return prev.concat(next.episodes.results);
      }, <EpisodeFromApi[]>[])
    );

    return allEpisodes;
  }
}
