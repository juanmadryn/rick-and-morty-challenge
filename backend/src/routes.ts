import { SwaggerRouter } from "koa-swagger-decorator";
import { counter, episodes } from "./presenters";

const routes = new SwaggerRouter();

// ROUTES
routes.get("/count", counter.countCharOccurrencesInEntityNames);
routes.get("/episodes", episodes.getEpisodesData);

// Swagger endpoint
routes.swagger({
    title: "rick-and-morty-challenge",
    description: "Backend del proyecto 'Rick And Morty Challenge' de Chipax",
    version: "0.1Z.0"
});

// mapDir will scan the input dir, and automatically call router.map to all Router Class
routes.mapDir(__dirname);

export { routes };