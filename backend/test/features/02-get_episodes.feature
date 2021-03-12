# language: es
Característica: Recuperar listado con episodios con ubicaciones de origen de los personajes que aparecieron
    Yo como dev aspirante a Chipax
    Quiero recuperar la lista de episodios de Rick And Morty, con la lista de ubicaciones de origen de los personajes que aprecieron
    Para mostrarlas.

    Escenario: Listado de episodios
    Dado el servicio de episodios
    Cuando se pide 1 episodio
    Entonces se obtiente la siguiente <respuesta>

    """
    {
    	"results": [
		  	{
    			"name": "Pilot",
          		"locations": ["Earth (C-137)", "Bepis 9", "Gromflom Prime", "unknown", "Girvonesk"]
			} 
    	]
    }
    """