import 'reflect-metadata'
import express from 'express';
import { createConnection } from 'typeorm';
import config from './config';
import { User } from './entity/user';

import userRouter from './routes/user'

(async () => {
    const app = express();

    try {
        const connection = await createConnection({
            type: 'postgres',
            host: config.host,
            port: 5432,
            username: config.dbUser,
            password: config.dbPass,
            database: config.dbName,
            synchronize: true,
            entities: [
                User
            ]
        });

        console.log(`Posgresql -> Online`);

        app.use(express.json());

        app.use('/api/v1/user', userRouter);
        
        app.listen(config.apiPort, () => {
            console.log(`http://${config.host}:${config.apiPort} -> Online`);
        });

    }
    catch(err) {
        console.error(err);
    }

})();