import dotenv from 'dotenv';
import { Config } from './types';

dotenv.config();

const config: Config = {
    host: process.env.HOST || 'localhost',
    apiPort: (process.env.API_PORT as unknown as number) || 3000,
    dbPort: (process.env.DB_PORT as unknown as number) || 5432,
    dbUser: process.env.DB_USER || 'postgres',
    dbPass: process.env.DB_PASS || 'test',
    dbName: process.env.DB_NAME || 'barclay'
}


export default config;