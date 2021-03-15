import * as dotenv from 'dotenv';
dotenv.config();

export default {
    RICK_AND_MORTY_API_URL: process.env.RICK_AND_MORTY_API_URL ?? ''
}