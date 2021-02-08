import dotenv from 'dotenv';
import { Config } from './types';

dotenv.config();

const config: Config = {
    host: process.env.HOST || 'localhost',
    apiPort: (process.env.API_PORT as unknown as number) || 3000,
    dbPort: (process.env.DB_PORT as unknown as number) || 5432,
    dbUser: process.env.DB_USER || 'postgres',
    dbPass: process.env.DB_PASS || 'test',
    dbName: process.env.DB_NAME || 'barclay',
    saltRounds: (process.env.SALT_ROUNDS as unknown as number) || 12,
    refreshSecret: process.env.REFRESH_SECRET || 'refreshtoken',
    accessSecret: process.env.ACCESS_SECRET || 'accesstoken',
    accessExpiry: process.env.ACCESS_EXPIRY || '15m',
    refreshExpiry: process.env.REFRESH_EXPIRY || '1w',
    barclaySecret: process.env.BARCLAY_SECRET || 'b8ede88ad60e33d5b0b4f07c969eaa0c'
}


export default config;