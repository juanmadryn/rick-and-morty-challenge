import { request, gql } from "graphql-request";
import { Characters,  CharacterFromApi } from "../types/characters";
import endpoints from "../config/endpoints.config";
import ServiceInterface from "./service_interface";

export default class CharactersService implements ServiceInterface {
  range = (start: number, end: number) => {
    const length = 1 + end - start;
    return Array.from({ length }, (_, i) => start + i);
  };

  findCharactersByCharQuery = gql`
    query($page: Int!, $name: String!) {
      characters(page: $page, filter: { name: $name }) {
        info {
          pages
        }
        results {
          name
        }
      }
    }
  `;

  async findByChar(char: string): Promise<CharacterFromApi[]> {
    const firstPage = await request<Characters>(
      endpoints.RICK_AND_MORTY_API_URL,
      this.findCharactersByCharQuery,
      {
        page: 1,
        name: char,
      }
    );

    const remainingPages = await Promise.all(
      this.range(2, firstPage.characters.info.pages).map((page) => {
        return request<Characters>(
          endpoints.RICK_AND_MORTY_API_URL,
          this.findCharactersByCharQuery,
          { page: page, name: char }
        );
      })
    );

    const allCharacter = firstPage.characters.results.concat(
      remainingPages.reduce((prev, next) => {
        return prev.concat(next.characters.results);
      }, <CharacterFromApi[]>[])
    );

    return allCharacter;
  }
}
