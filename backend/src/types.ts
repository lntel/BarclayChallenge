export interface Config {
    host: string;
    apiPort: number;
    dbPort: number;
    dbUser: string;
    dbPass: string;
    dbName: string;
    saltRounds: number;
    refreshSecret: string;
    refreshExpiry: string;
    accessSecret: string;
    accessExpiry: string;
}

export type TokenType = | 'access' | 'refresh';

export interface ValidatorOptions {
    key: string;
    name?: string;
    optional?: boolean;
    expression?: RegExp;
}