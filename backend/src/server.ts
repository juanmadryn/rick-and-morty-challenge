import Koa from "koa";
import bodyParser from "koa-bodyparser";
import winston from "winston";

import { logger } from "./logger";
import { config } from "./config";
import { routes } from "./routes";

const app = new Koa();

// Logger middleware -> use winston as logger (logging.ts with config)
app.use(logger(winston));

// Enable bodyParser with default options
app.use(bodyParser());

// These routes are protected by the JWT middleware, also include middleware to respond with "Method Not Allowed - 405".
app.use(routes.routes()).use(routes.allowedMethods());

app.listen(config.port);

console.log(`Server running on port ${config.port}`);