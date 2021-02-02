import dotenv from 'dotenv';
import { Config } from './types';

dotenv.config();

const config: Config = {
    host: process.env.HOST || 'localhost',
    apiPort: (process.env.API_PORT as unknown as number) || 3000

}


export default config;