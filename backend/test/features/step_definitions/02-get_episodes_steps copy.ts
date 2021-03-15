import { binding, given, then, when} from 'cucumber-tsflow';
import { assert } from 'chai';
import {default as syncrequest} from 'sync-request';
import {default as jsondiff} from 'json-diff';
import { Counters } from '../../../src/types/counter';
import { EpisodesData } from '../../../src/types/episodes';

@binding()
class GetEpisodesSteps {
  private result: EpisodesData[];
  @given("el servicio de episodios")
  public givenEpisodesService() {
    //empty
    return true;
  }

  @when("se pide el listado de episodios")
  public whenRequestEpisodesList() {
    let resp = syncrequest('GET', 'http://localhost:3000/episodes');
    let result = JSON.parse(resp.getBody('utf8'));
    delete result.timeOfExecution;
    this.result = <EpisodesData> result;
    return true;
  }

  @then("se obtiente la siguiente respuesta")
  public thenItIsObtainedTheFollowingAnswer(episodes: string) {
    let expectedResult = JSON.parse(episodes);
    return assert.equal(undefined, jsondiff.diff(expectedResult, this.result));
  }
}

export = GetEpisodesSteps;