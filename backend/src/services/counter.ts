import { Counters } from '../types/counter';
import { count } from '../utils/countUtils';
import CharactersService from './characters';
import EpisodeService from './episodes'
import LocationsService from './locations';

export const countCharOccurrencesInEntityNames = async (): Promise<Counters> => {
    const hrstart = process.hrtime();

    const episodesService = new EpisodeService();
    const locationsService = new LocationsService();
    const charactersService = new CharactersService();
    
    const [episodes, locations, characters] = await Promise.all([episodesService.findByChar('e'), locationsService.findByChar('l'), charactersService.findByChar('c')]);
    
    const countOfCharEInEpisodesNames = count(episodes.reduce((prev, next) => {return prev + (""+next.name)}, ''), "e");
    const countOfCharLInLocationsNames = count(locations.reduce((prev, next) => {return prev + (""+next.name)}, ''), "l");
    const countOfCharCInCharactersNames = count(characters.reduce((prev, next) => {return prev + (""+next.name)}, ''), "c");

    const result: Counters = {
        countOfEInEpisodesName: countOfCharEInEpisodesNames,
        countOfLInLocationsName: countOfCharLInLocationsNames,
        countOfCInCharactersName: countOfCharCInCharactersNames
    };
    return result;
}