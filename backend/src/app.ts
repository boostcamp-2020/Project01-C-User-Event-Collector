import 'reflect-metadata';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as morgan from 'morgan';
import { createConnection } from 'typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as mongoose from 'mongoose';
import apiRoute from './route';

mongoose
  .connect(
    'mongodb+srv://gyeong:sktkdrud2@vibe.ixh4i.mongodb.net/<dbname>?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
  )
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: path.join(__dirname, '../.env.production') });
} else if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: path.join(__dirname, '../.env.development') });
} else {
  throw new Error('process.env.NODE_ENV Not Found');
}

// TODO: 사용자 정의 에러 핸들링 미들웨어
createConnection()
  .then(() => {
    console.log('Database Connected :)');

    const app = express();
    app.set('port', process.env.PORT || 8000);

    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(morgan('dev'));
    // TODO: 허용할 주소 정확히 명시하기
    app.use(cors());

    app.use('/api', apiRoute);

    app.listen(app.get('port'), () => {
      console.log(`API Server App Listening on PORT ${app.get('port')}`);
    });
  })
  .catch(error => console.log(error));
