import { binding, given, then, when} from 'cucumber-tsflow';
import { assert } from 'chai';
import {default as syncrequest} from 'sync-request';
import {default as jsondiff} from 'json-diff';
import { Counters } from '../../../src/types/counter';

@binding()
class CountLettersSteps {
  private result: Counters;
  @given("el servicio de recuperación de datos de la API de Rick And Morty")
  public givenRickAndMortyAPIService() {
    //empty
    return true;
  }

  @when("se cuentan las letras e en los nobres de episodios, las letras l en los nombres de ubicaciones y las letras c en los de personajes")
  public whenCountLettersInTheirNames() {
    let resp = syncrequest('GET', 'http://localhost:3000/count');
    let result = JSON.parse(resp.getBody('utf8'));
    delete result.timeOfExecution;
    this.result = <Counters> result;
    return true;
  }

  @then("se obtiene la siguiente respuesta")
  public thenItIsObtainedTheFollowingAnswer(counters: string) {
    let expectedResult = JSON.parse(counters);
    return assert.equal(undefined, jsondiff.diff(expectedResult, this.result));
  }
}

export = CountLettersSteps;