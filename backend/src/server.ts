import Koa from "koa";
import bodyParser from "koa-bodyparser";
import { default as koaStatic } from "koa-static";
import { default as send } from "koa-send";
import winston from "winston";

import { logger } from "./logger";
import { default as config } from "./config/app.config";
import { routes } from "./routes";

const app = new Koa();

// Logger middleware -> use winston as logger (logging.ts with config)
app.use(logger(winston));

// Enable bodyParser with default options
app.use(bodyParser());

console.log(__dirname);
app.use(koaStatic(`${__dirname}/../../public`));

// These routes are protected by the JWT middleware, also include middleware to respond with "Method Not Allowed - 405".
app.use(routes.routes()).use(routes.allowedMethods());

app.listen(config.APP_PORT);

// this last middleware catches any request that isn't handled by
// koa-static or koa-router, ie your index.html in your example
app.use(async function (ctx, next) {
    return send(
        ctx, 
        '/index.html', 
        { 
            root: `${__dirname}/../../public`
        }
    )
    .then(() => next())
});

console.log(`Server running on port ${config.APP_PORT}`);
