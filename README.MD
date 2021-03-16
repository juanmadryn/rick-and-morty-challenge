# Chipax Challenge - Rick And Morty API

Resolución de challenge Rick And Morty API de Chipax: 

## Demo

 [http://chipax-challenge.dnsalias.net/](http://chipax-challenge.dnsalias.net/)

## Arquitectura de la solución

Este proyecto se desarrolló en dos partes bien diferenciadas. Por un lado un backend realizado en NodeJS + [Koa](https://koajs.com/), y por el otro un frontend en Angular.

## Estructura del repositorio

El repositorio se encuentra organizado como sigue:

    .
    ├── backend                     # Aplicación NodeJS con API de servicios
        ├── src
            ├── presenters          # Presenters que dan acceso a los servicios
            ├── services            # Lógica de negocio
            ├── types               # Tipos de objetos
            ├── utils               # Utilidades varias.
        ├── test
            ├── features             # Definiciones de escenarios en Gherkin para Cucumber
                ├── step_definition # Implementación de steps de Cucumber para testing
    ├── frontend                    # Aplicación Angular con intefaz de usuario
    ├── src                         
        ├── app                     # 
            ├── home                # Componente Home
            ├── services            # Servicios de comunicación con el backend
            ├── types               # Tipos de objetos
    ├── start.sh                    # Script de compilación y arranque
    └── README.md                   # README


## Requerimientos

* Git
* Node.js 12+
 

## Inicio de la aplicación

* Clonar repositorio.
* Conceder permisos de ejecución al script `chmod +x start.sh`
* Ejecutar el comando `./start.sh`

## Tests

Se utilizó Cucumber para la definición e implementación de los escenarios de pruebas funcionales. Para ejecutar: `npm test`