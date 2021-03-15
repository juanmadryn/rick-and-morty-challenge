# language: es
Característica: Recuperar listado con episodios con ubicaciones de origen de los personajes que aparecieron
    Yo como dev aspirante a Chipax
    Quiero recuperar la lista de episodios de Rick And Morty, con la lista de ubicaciones de origen de los personajes que aprecieron
    Para mostrarlas.

    Escenario: Listado de episodios
    Dado el servicio de episodios
    Cuando se pide el listado de episodios
    Entonces se obtiente la siguiente respuesta

    """
    {
        "episodes": [{
            "name": "Pilot",
            "locations": ["Earth (C-137)", "Bepis 9", "Gromflom Prime", "unknown", "Girvonesk"]
        }, {
            "name": "Lawnmower Dog",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "unknown", "Mr. Goldenfold's dream", "Snuffles' Dream"]
        }, {
            "name": "Anatomy Park",
            "locations": ["Earth (C-137)", "Anatomy Park", "unknown"]
        }, {
            "name": "M. Night Shaym-Aliens!",
            "locations": ["Earth (C-137)", "unknown"]
        }, {
            "name": "Meeseeks and Destroy",
            "locations": ["Earth (C-137)", "Fantasy World", "Giant's Town", "unknown", "Mr. Meeseeks Box"]
        }, {
            "name": "Rick Potion #9",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "Cronenberg Earth", "unknown"]
        }, {
            "name": "Raising Gazorpazorp",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "Gazorpazorp", "unknown"]
        }, {
            "name": "Rixty Minutes",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "unknown", "Earth (C-500A)", "Gazorpazorp", "Hamster in Butt World", "Trunk World", "Interdimensional Cable", "Earth (Phone Dimension)"]
        }, {
            "name": "Something Ricked This Way Comes",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "Pluto", "unknown"]
        }, {
            "name": "Close Rick-counters of the Rick Kind",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "unknown", "Earth (Evil Rick's Target Dimension)", "Hideout Planet", "Cronenberg Earth", "Earth (J19ζ7)", "Eric Stoltz Mask Earth", "Mr. Meeseeks Box", "Earth (Pizza Dimension)", "Greasy Grandma World", "Earth (Phone Dimension)", "Earth (Chair Dimension)", "Mount Olympus"]
        }, {
            "name": "Ricksy Business",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "Bepis 9", "Bird World", "Gear World", "unknown", "Fantasy World", "Planet Squanch", "Girvonesk", "Testicle Monster Dimension"]
        }, {
            "name": "A Rickle in Time",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "unknown"]
        }, {
            "name": "Mortynight Run",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "unknown", "Roy: A Life Well Lived", "Glaagablaaga", "Gazorpazorp", "Earth (5-126)", "Mr. Meeseeks Box", "Gear World", "Testicle Monster Dimension"]
        }, {
            "name": "Auto Erotic Assimilation",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "unknown", "Unity's Planet"]
        }, {
            "name": "Total Rickall",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "unknown"]
        }, {
            "name": "Get Schwifty",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "Signus 5 Expanse", "Bird World", "Alphabetrium", "Larva Alien's Planet", "unknown", "Planet Squanch", "Girvonesk", "Árboles Mentirosos"]
        }, {
            "name": "The Ricks Must Be Crazy",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "unknown", "Rick's Battery Microverse", "Earth (Giant Telepathic Spiders Dimension)", "Zeep Xanflorp's Miniverse", "Kyle's Teenyverse"]
        }, {
            "name": "Big Trouble in Little Sanchez",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "Nuptia 4", "unknown"]
        }, {
            "name": "Interdimensional Cable 2: Tempting Fate",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "unknown", "Bepis 9", "Glaagablaaga", "Hamster in Butt World", "Larva Alien's Planet", "Plopstar", "Árboles Mentirosos"]
        }, {
            "name": "Look Who's Purging Now",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "Purge Planet"]
        }, {
            "name": "The Wedding Squanchers",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "unknown", "Bird World", "Glaagablaaga", "Larva Alien's Planet", "Planet Squanch", "Árboles Mentirosos"]
        }, {
            "name": "The Rickshank Rickdemption",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "unknown", "Bird World", "Earth (Unknown dimension)", "Earth (J19ζ7)", "Earth (D-99)"]
        }, {
            "name": "Rickmancing the Stone",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "Post-Apocalyptic Earth"]
        }, {
            "name": "Pickle Rick",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "unknown"]
        }, {
            "name": "Vindicators 3: The Return of Worldender",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "unknown", "Bepis 9", "Gear World", "Girvonesk"]
        }, {
            "name": "The Whirly Dirly Conspiracy",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "unknown", "Bird World", "Resort Planet"]
        }, {
            "name": "Rest and Ricklaxation",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "Abadango", "Detoxifier", "unknown"]
        }, {
            "name": "The Ricklantis Mixup",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "unknown", "Earth (K-83)", "Earth (K-22)", "Earth (D716)", "Earth (D716-B)", "Earth (D716-C)", "Earth (J-22)", "Trunk World", "Citadel of Ricks"]
        }, {
            "name": "Morty's Mind Blowers",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "Venzenulon 7", "The Menagerie", "unknown", "Mr. Meeseeks Box"]
        }, {
            "name": "The ABC's of Beth",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "Krootabulon", "unknown"]
        }, {
            "name": "The Rickchurian Mortydate",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "unknown", "Mega Gargantuan Kingdom"]
        }, {
            "name": "Edge of Tomorty: Rick, Die, Rickpeat",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "Mr. Meeseeks Box", "unknown", "Earth (Fascist Dimension)", "Earth (Fascist Shrimp Dimension)", "Earth (Fascist Teddy Bear Dimension)", "Earth (Wasp Dimension)"]
        }, {
            "name": "The Old Man and the Seat",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "unknown", "Midland Quasar", "Globaflyn"]
        }, {
            "name": "One Crew Over the Crewcoo's Morty",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "unknown", "Mount Olympus", "Plitzville Montana", "Earth (Tusk Dimension)", "Gramuflack"]
        }, {
            "name": "Claw and Hoarder: Special Ricktim's Morty",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "Draygon", "unknown"]
        }, {
            "name": "Rattlestar Ricklactica",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "unknown", "Snake Planet"]
        }, {
            "name": "Never Ricking Morty",
            "locations": ["Earth (C-137)", "Story Train", "Tickets Please Guy Nightmare", "Morty’s Story", "Ricks’s Story"]
        }, {
            "name": "Promortyus",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "Glorzo Asteroid"]
        }, {
            "name": "The Vat of Acid Episode",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "unknown", "Merged Universe", "Near-Duplicate Reality"]
        }, {
            "name": "Childrick of Mort",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "Gaia", "Mount Olympus"]
        }, {
            "name": "Star Mort: Rickturn of the Jerri",
            "locations": ["Earth (C-137)", "Earth (Replacement Dimension)", "Bird World", "Planet Squanch", "unknown", "Gromflom Prime"]
        }]
    }
    """