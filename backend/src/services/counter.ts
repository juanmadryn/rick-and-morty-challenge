import { Counters } from '../types/counter';
import CharactersService from './characters';
import EpisodeService from './episodes'
import LocationsService from './locations';

export const countCharOccurrencesInEntityNames = async (): Promise<Counters> => {
    var hrstart = process.hrtime();

    let episodesService = new EpisodeService();
    let locationsService = new LocationsService();
    let charactersService = new CharactersService();
    
    let [episodes, locations, characters] = await Promise.all([episodesService.findByChar('e'), locationsService.findByChar('l'), charactersService.findByChar('c')]);
    
    let countOfCharEInEpisodesNames = (episodes.reduce((prev, next) => {return prev + (""+next.name)}, '').match(/e/gi)||[]).length;
    let countOfCharLInLocationsNames = (locations.reduce((prev, next) => {return prev + (""+next.name)}, '').match(/l/gi)||[]).length;
    let countOfCharCInCharactersNames = (characters.reduce((prev, next) => {return prev + (""+next.name)}, '').match(/c/gi)||[]).length;

    let result: Counters = {
        countOfEInEpisodesName: countOfCharEInEpisodesNames,
        countOfLInLocationsName: countOfCharLInLocationsNames,
        countOfCInCharactersName: countOfCharCInCharactersNames
    };
    return result;
}