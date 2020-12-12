import * as passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from '../entities/User';

export interface IJwtPayload {
  id: number;
  nickname: string;
  email: string;
  profileURL: string;
}

const passportJwtConfig = (): void => {
  const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: process.env.JWT_SECRET,
  };

  const jwtVerify = async (jwtPayload: IJwtPayload, done: any): Promise<void> => {
    try {
      const user = await User.findOne({ id: jwtPayload.id });
      console.log(user);
      if (user) return done(null, user);
      return done(null, false);
    } catch (err) {
      console.log(err);
      return done(err);
    }
  };

  passport.use('jwt', new JwtStrategy(jwtOptions, jwtVerify));
};

export default passportJwtConfig;
