import * as dotenv from 'dotenv';
dotenv.config();

export default {
    APP_PORT: process.env.APP_PORT ?? '',
    APP_DEBUG: process.env.APP_DEBUG ?? false
}