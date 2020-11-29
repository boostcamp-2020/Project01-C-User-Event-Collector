import 'reflect-metadata';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as morgan from 'morgan';
import { createConnection } from 'typeorm';
import * as dotenv from 'dotenv';

import apiRoute from './route';

dotenv.config();

const app = express();
app.set('port', process.env.PORT || 3108);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
// TODO: 허용할 주소 정확히 명시하기
app.use(cors());

app.use('/api', apiRoute);

// TODO: 사용자 정의 에러 핸들링 미들웨어
createConnection()
  .then(() => {
    console.log('Database Connected :)');
  })
  .catch(error => console.log(error));

app.listen(app.get('port'), () => {
  console.log(`API Server App Listening on PORT ${app.get('port')}`);
});