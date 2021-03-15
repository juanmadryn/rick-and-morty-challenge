import { binding, given, then, when} from 'cucumber-tsflow';
import { assert } from 'chai';

@binding()
class CountLettersSteps {

  @given("la siguiente lista de <locations> con al menos una letra l en el nombre")
  public givenAListOfLocations(locations: any) {
    return 'pending';
  }

  @when("se cuentan las letras l en sus nombres")
  public whenCountLLettersInTheirNames() {
    return 'pending';
  }

  @then("se obtiene como respuesta 73")
  public thenItIsObtainedAsResult73() {
    return 'pending';
  }
}

export = CountLettersSteps;