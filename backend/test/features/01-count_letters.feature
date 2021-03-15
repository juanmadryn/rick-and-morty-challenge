# language: es
Característica: Contar letras en nombres
    Yo como dev aspirante a Chipax
    Quiero recuperar contar letras en nombres de episodios, ubicaciones y personajes de Rick And Morty
    Para poder indicar cuántas veces aparece una letra determinada en dichos nombres|.

    Escenario: Contar letras l's en ubicaciones
    Dado la siguiente lista de <locations> con al menos una letra l en el nombre
	"""
	{ locations: [        
		{
          "name": "Citadel of Ricks"
        },
        {
          "name": "Worldender's lair"
        },
        {
          "name": "Interdimensional Cable"
        },
        {
          "name": "Immortality Field Resort"
        },
        {
          "name": "Post-Apocalyptic Earth"
        },
        {
          "name": "Purge Planet"
        },
        {
          "name": "Venzenulon 7"
        },
        {
          "name": "Bird World"
        },
        {
          "name": "St. Gloopy Noops Hospital"
        },
        {
          "name": "Mr. Goldenfold's dream"
        },
        {
          "name": "Gromflom Prime"
        },
        {
          "name": "Earth (Replacement Dimension)"
        },
        {
          "name": "Testicle Monster Dimension"
        },
        {
          "name": "Hideout Planet"
        },
        {
          "name": "Unity's Planet"
        },
        {
          "name": "Roy: A Life Well Lived"
        },
        {
          "name": "Eric Stoltz Mask Earth"
        },
        {
          "name": "Earth (Evil Rick's Target Dimension)"
        },
        {
          "name": "Planet Squanch"
        },
        {
          "name": "Glaagablaaga"
        },
		{
          "name": "Resort Planet"
        },
        {
          "name": "Interdimensional Customs"
        },
        {
          "name": "Galactic Federation Prison"
        },
        {
          "name": "Hamster in Butt World"
        },
        {
          "name": "Earth (Giant Telepathic Spiders Dimension)"
        },
        {
          "name": "Alphabetrium"
        },
        {
          "name": "Krootabulon"
        },
        {
          "name": "Pluto"
        },
        {
          "name": "Fantasy World"
        },
        {
          "name": "Zeep Xanflorp's Miniverse"
        },
        {
          "name": "Kyle's Teenyverse"
        },
        {
          "name": "Larva Alien's Planet"
        },
        {
          "name": "Pawn Shop Planet"
        },
        {
          "name": "Gear World"
        },
        {
          "name": "Froopyland"
        },
        {
          "name": "Trunk World"
        },
        {
          "name": "Plopstar"
        },
        {
          "name": "Blips and Chitz"
        },
        {
          "name": "Snuffles\' Dream"
        },
        {
          "name": "Greasy Grandma World"
        },
		{
          "name": "Árboles Mentirosos"
        },
        {
          "name": "Alien Day Spa"
        },
        {
          "name": "Snake Planet"
        },
        {
          "name": "Forbodulon Prime"
        },
        {
          "name": "Midland Quasar"
        },
        {
          "name": "Globaflyn"
        },
        {
          "name": "Mount Olympus"
        },
        {
          "name": "Plitzville Montana"
        },
        {
          "name": "Gramuflack"
        },
        {
          "name": "New Improved Galactic Federation Quarters"
        },
        {
          "name": "Non-Diegetic Alternative Reality"
        },
        {
          "name": "Tickets Please Guy Nightmare"
        },
        {
          "name": "Glorzo Asteroid"
        },
        {
          "name": "Alien Acid Plant"
        },
        {
          "name": "Near-Duplicate Reality"
        },
        {
          "name": "NX-5 Planet Remover"
        }
	]}
	"""
    Cuando se cuentan las letras l en sus nombres
    Entonces se obtiene como respuesta 73

	Escenario: Contar letras e's en episodios
    Dado la siguiente lista de <episodes> con al menos una letra e en el nombre
    """
    {
    	"episodes": [
		  	{
				"name": "Lawnmower Dog"
			},
			{
				"name": "M. Night Shaym-Aliens!"
			},
			{
				"name": "Meeseeks and Destroy"
			},
			{
				"name": "Rixty Minutes"
			},
			{
				"name": "Something Ricked This Way Comes"
			},
			{
				"name": "Close Rick-counters of the Rick Kind"
			},
			{
				"name": "Ricksy Business"
			},
			{
				"name": "A Rickle in Time"
			},
			{
				"name": "Auto Erotic Assimilation"
			},
			{
				"name": "Get Schwifty"
			},
			{
				"name": "The Ricks Must Be Crazy"
			},
			{
				"name": "Big Trouble in Little Sanchez"
			},
			{
				"name": "Interdimensional Cable 2: Tempting Fate"
			},
			{
				"name": "The Wedding Squanchers"
			},
			{
				"name": "The Rickshank Rickdemption"
			},
			{
				"name": "Rickmancing the Stone"
			},
			{
				"name": "Pickle Rick"
			},
			{
				"name": "Vindicators 3: The Return of Worldender"
			},
			{
				"name": "The Whirly Dirly Conspiracy"
			},
			{
				"name": "Rest and Ricklaxation"
			}
    	]
    }
    """
	  Cuando se cuentan las letras e en sus nombres
    Entonces se obtiene como respuesta 71

	Escenario: Contar letras c's en nombre de personajes
    Dado la siguiente lista de <characters> con al menos una letra c en el nombre
    """
    {
    	"characters": [
		  	{
				"name": "Rick Sanchez"
			},
			{
				"name": "Abadango Cluster Princess"
			},
			{
				"name": "Abradolf Lincler"
			},
			{
				"name": "Adjudicator Rick"
			},
			{
				"name": "Agency Director"
			},
			{
				"name": "Alien Rick"
			},
			{
				"name": "Amish Cyborg"
			},
			{
				"name": "Antenna Rick"
			},
			{
				"name": "Aqua Rick"
			},
			{
				"name": "Arcade Alien"
			},
			{
				"name": "Arthricia"
			},
			{
				"name": "Beth Sanchez"
			},
			{
				"name": "Black Rick"
			},
			{
				"name": "Bootleg Portal Chemist Rick"
			},
			{
				"name": "Borpocian"
			},
			{
				"name": "Calypso"
			},
			{
				"name": "Campaign Manager Morty"
			},
			{
				"name": "Canklanker Thom"
			},
			{
				"name": "Centaur"
			},
			{
				"name": "Chris"
			}
    	]
    }
    """
	Cuando se cuentan las letras c en sus nombres
    Entonces se obtiene como respuesta 26
