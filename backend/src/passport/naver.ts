import * as passport from 'passport';
import { Strategy as NaverStrategy } from 'passport-naver';
import User from '../entities/User';
import Log from '../models/Log';

const passportNaverConfig = (): void => {
  const naverStrategyOptions = {
    clientID: process.env.NAVER_CLIENT_ID as string,
    clientSecret: process.env.NAVER_CLIENT_SECRET as string,
    callbackURL: process.env.NAVER_CALLBACK_URL as string,
  };

  // Provider의 토큰은 사용하지 않음 (_ : accessToken __ : refreshToken)
  const naverVerify = async (_: string, __: string, profile: any, done: any): Promise<void> => {
    try {
      const { email, nickname, profile_image: profileURL, age } = profile._json;
      let user = await User.findOne({ email });
      if (!user) {
        user = new User();
        user.email = email;
        user.username = nickname;
        user.nickname = nickname;
        user.profileURL = profileURL;
        user.age = age;
        await user.save();
        const logInfo = { eventTime: new Date(), eventName: 'sign_up_event' };
        const log = new Log(logInfo);
        console.log('-------------------- log : ', log);
        await log.save();
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  };
  passport.use('naver', new NaverStrategy(naverStrategyOptions, naverVerify));
};

export default passportNaverConfig;
