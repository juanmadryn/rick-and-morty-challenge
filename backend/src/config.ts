export interface Config {
    port: number;
    debugLogging: boolean;
    dbEntitiesPath: string[];
}

const isDevMode = process.env.NODE_ENV == "development";

const config: Config = {
    port: +(process.env.PORT || 3000),
    debugLogging: isDevMode,
    dbEntitiesPath: [
      ... isDevMode ? ["src/entity/**/*.ts"] : ["dist/entity/**/*.js"],
    ]
};

export { config };