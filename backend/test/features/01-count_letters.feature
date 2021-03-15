# language: es
Característica: Contar letras en nombres
    Yo como dev aspirante a Chipax
    Quiero recuperar contar letras en nombres de episodios, ubicaciones y personajes de Rick And Morty
    Para poder indicar cuántas veces aparece una letra determinada en dichos nombres|.

    Escenario: Contar letras solicitadas en nombres de ubicaciones, episodios y personajes
    Dado el servicio de recuperación de datos de la API de Rick And Morty
		Cuando se cuentan las letras e en los nobres de episodios, las letras l en los nombres de ubicaciones y las letras c en los de personajes
    Entonces se obtiene la siguiente respuesta
    """
    {
      "counters": {
        "countOfEInEpisodesName": 71,
        "countOfLInLocationsName": 73,
        "countOfCInCharactersName": 394
      }
    }
    """ 