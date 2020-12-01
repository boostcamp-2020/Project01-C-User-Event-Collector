import * as passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from '../entities/User';

interface JwtPayload {
  id: number;
  nickname: string;
  email: string;
  profileURL: string;
}

const passportJwtConfig = (): void => {
  const jwtOptions = {
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  };

  const jwtVerify = async (jwtPayload: JwtPayload, done: any): Promise<void> => {
    try {
      const user = await User.findOne({ id: jwtPayload.id });
      if (user) return done(null, user);
      return done(null, false);
    } catch (err) {
      return done(err);
    }
  };

  passport.use('jwt', new JwtStrategy(jwtOptions, jwtVerify));
};

export default passportJwtConfig;
