import express from 'express';
import config from './config';

const app = express();

app.listen(config.apiPort, () => {
    console.log(`http://${config.host}:${config.apiPort} -> Online`);
});