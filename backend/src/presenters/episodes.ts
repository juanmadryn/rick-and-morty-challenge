import { BaseContext } from "koa";
import { request, summary, responsesAll, tagsAll } from "koa-swagger-decorator";
import EpisodeService from "../services/episodes";
import { EpisodeFromApi, EpisodesData, EpisodesResult } from "../types/episodes";

@responsesAll({
  200: { description: "success" },
  400: { description: "bad request" },
})
@tagsAll(["Counter"])
export default class EpisodesPresenter {
  @request("get", "/episodes")
  @summary("get episodes data")
  public static async getEpisodesData(ctx: BaseContext): Promise<void> {
    try {
      // moment of execution's start
      var hrstart = process.hrtime();

      // I get all the episodes
      let episodesService: EpisodeService = new EpisodeService();
      let allEpisodes: EpisodeFromApi[] = await episodesService.findAll();
      // ... and map every episode to expected format ({name: 'episode', locations: ['location1', 'location2']}) 
      let episodesData: EpisodesData[] = <EpisodesData[]>allEpisodes.map((episode) => {
        let episodeData: EpisodesData = {
          name: episode.name,
          locations: episode.characters.reduce((prev, next) => {
            if(prev.indexOf(next.origin.name) == -1) {
              prev.push(next.origin.name);
            } 
            return prev;
          }, <string[]>[])
        };
        return episodeData;
      });
      // moment of execution's end
      let hrend = process.hrtime(hrstart);

      let result: EpisodesResult = {
        episodes: episodesData,
        timeOfExecution: hrend[0]+'s.' + hrend[1]
      }

      ctx.body = result;
      ctx.status = 200;
      ctx.message = "Ok";
    } catch (error) {
      ctx.status = 500;
      ctx.message = error.message;
    }
  }
}