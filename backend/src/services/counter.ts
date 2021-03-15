import { Counters } from '../types/counter';
import { count } from '../utils/countUtils';
import CharactersService from './characters';
import EpisodeService from './episodes'
import LocationsService from './locations';

export const countCharOccurrencesInEntityNames = async (): Promise<Counters> => {
    var hrstart = process.hrtime();

    let episodesService = new EpisodeService();
    let locationsService = new LocationsService();
    let charactersService = new CharactersService();
    
    let [episodes, locations, characters] = await Promise.all([episodesService.findByChar('e'), locationsService.findByChar('l'), charactersService.findByChar('c')]);
    
    let countOfCharEInEpisodesNames = count(episodes.reduce((prev, next) => {return prev + (""+next.name)}, ''), "e");
    let countOfCharLInLocationsNames = count(locations.reduce((prev, next) => {return prev + (""+next.name)}, ''), "l");
    let countOfCharCInCharactersNames = count(characters.reduce((prev, next) => {return prev + (""+next.name)}, ''), "c");

    let result: Counters = {
        countOfEInEpisodesName: countOfCharEInEpisodesNames,
        countOfLInLocationsName: countOfCharLInLocationsNames,
        countOfCInCharactersName: countOfCharCInCharactersNames
    };
    return result;
}