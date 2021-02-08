import 'reflect-metadata'
import express from 'express';
import { createConnection } from 'typeorm';
import config from './config';
import { User } from './entity/user';

import userRouter from './routes/user'
import siteRouter from './routes/site'
import paymentRouter from './routes/payment'

import cors from 'cors'
import cookieParser from 'cookie-parser'
import { Site } from './entity/site';

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
                User,
                Site
            ]
        });

        console.log(`Posgresql -> Online`);

        app.use(cors());

        app.use(cookieParser());
        app.use(express.json());

        app.use(express.static('public'));

        app.use('/api/v1/user', userRouter);
        app.use('/api/v1/site', siteRouter);
        app.use('/api/v1/payment', paymentRouter);
        
        app.listen(config.apiPort, () => {
            console.log(`http://${config.host}:${config.apiPort} -> Online`);
        });

    }
    catch(err) {
        console.error(err);
    }

})();