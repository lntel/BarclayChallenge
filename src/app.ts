import 'reflect-metadata'
import express from 'express';
import { createConnection } from 'typeorm';
import config from './config';
import { User } from './entity/user';

import userRouter from './routes/user'
import siteRouter from './routes/site'
import paymentRouter from './routes/payment'
import hairRouter from './routes/hairdresser'
import serviceRouter from './routes/service'
import productRouter from './routes/product'

import cors from 'cors'
import cookieParser from 'cookie-parser'
import { Site } from './entity/site';
import { Hairdresser } from './entity/hairdresser';
import { Payment } from './entity/payment';
import Service from './entity/service';
import Product from './entity/product';

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
                Site,
                Hairdresser,
                Payment,
                Service,
                Product
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
        app.use('/api/v1/hairdresser', hairRouter);
        app.use('/api/v1/service', serviceRouter);
        app.use('/api/v1/product', productRouter);
        
        app.listen(config.apiPort, () => {
            console.log(`http://${config.host}:${config.apiPort} -> Online`);
        });

    }
    catch(err) {
        console.error(err);
    }

})();