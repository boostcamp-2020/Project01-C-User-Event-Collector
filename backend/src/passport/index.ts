import * as passport from 'passport';
import { Strategy as NaverStrategy } from 'passport-naver';
import User from '../entities/User';

const passportConfig = (): void => {
  const naverStrategyOptions = {
    clientID: process.env.NAVER_CLIENT_ID as string,
    clientSecret: process.env.NAVER_CLIENT_SECRET as string,
    callbackURL: process.env.NAVER_CALLBACK_URL as string,
  };

  // Provider의 토큰은 사용하지 않음 (_ : accessToken __ : refreshToken)
  const naverVerify = async (_: string, __: string, profile: any, done: any): Promise<void> => {
    try {
      const { email, nickname, profile_image: profileURL } = profile._json;
      let user = await User.findOne({ email });
      if (!user) {
        user = new User();
        user.email = email;
        user.username = nickname;
        user.nickname = nickname;
        user.profileURL = profileURL;
        await user.save();
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  };
  passport.use('naver', new NaverStrategy(naverStrategyOptions, naverVerify));
};

export default passportConfig;
