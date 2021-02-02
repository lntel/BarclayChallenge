export interface Config {
    host: string;
    apiPort: number;
    dbPort: number;
    dbUser: string;
    dbPass: string;
    dbName: string;
    saltRounds: number;
}

export interface ValidatorOptions {
    key: string;
    name?: string;
    optional?: boolean;
}