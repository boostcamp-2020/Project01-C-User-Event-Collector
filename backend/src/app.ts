import 'reflect-metadata';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as typeorm from 'typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as mongoose from 'mongoose';
import * as passport from 'passport';

import passportConfig from './passport';
import apiRoute from './route';

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: path.join(__dirname, '../.env.production') });
} else if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: path.join(__dirname, '../.env.development') });
} else {
  throw new Error('process.env.NODE_ENV Not Found');
}

const loadDatabases = async (): Promise<void> => {
  await typeorm.createConnection();
  console.log('MySQL Connected!');
  await mongoose.connect(process.env.MONGO_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  console.log('MongoDB Connected!');
};

const startApp = async (): Promise<void> => {
  try {
    await loadDatabases();

    const app = express();
    app.set('port', process.env.PORT || 8000);

    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(morgan('dev'));
    // TODO: 허용할 주소 정확히 명시하기
    app.use(cors());
    app.use(passport.initialize());
    passportConfig();

    app.use('/api', apiRoute);

    // TODO: 사용자 정의 에러 핸들링 미들웨어

    app.listen(app.get('port'), () => {
      console.log(`API Server App Listening on PORT ${app.get('port')}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startApp();
