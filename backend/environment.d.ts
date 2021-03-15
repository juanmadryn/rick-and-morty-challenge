// declare global env variable to define types
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: string,
        RICK_AND_MORTY_API_URL: string
      }
    }
  }
  
  export { };