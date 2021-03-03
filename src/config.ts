import dotenv from 'dotenv';
import { Config } from './types';

dotenv.config();

const config: Config = {
    host: process.env.HOST || 'localhost',
    apiPort: (process.env.PORT as unknown as number) || 3000,
    dbPort: (process.env.DB_PORT as unknown as number) || 5432,
    dbUser: process.env.DB_USER || 'postgres',
    dbPass: process.env.DB_PASS || 'test',
    dbName: process.env.DB_NAME || 'barclay',
    saltRounds: (process.env.SALT_ROUNDS as unknown as number) || 12,
    refreshSecret: process.env.REFRESH_SECRET || 'refreshtoken',
    accessSecret: process.env.ACCESS_SECRET || 'accesstoken',
    accessExpiry: process.env.ACCESS_EXPIRY || '24h',
    refreshExpiry: process.env.REFRESH_EXPIRY || '1w',
    barclaySecret: process.env.BARCLAY_SECRET || '37ad78251ad548bcb3ccb2a70248fd7a039c38459845487ea32e2f3c1253b45eb34a4b514c8a4173910e8e0dc57dc3b7e306a906a0234f5a8d1982e21c4b590f24f40ca1014f472d8b1c0d8cd800ac536fc4653b8f29438abf7d8a894f3c0fce8b61fba0c69749a1ab46d85f0df31ffe8fc7741f78e24dddb30f25b8ba8dcb7a'
}


export default config;