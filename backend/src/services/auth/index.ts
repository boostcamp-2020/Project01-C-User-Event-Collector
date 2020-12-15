import * as jwt from 'jsonwebtoken';
import { IJwtPayload } from '../../middlewares/auth';

const createToken = ({ id, nickname, email, profileURL }: IJwtPayload): string => {
  const token = jwt.sign({ id, nickname, email, profileURL }, process.env.JWT_SECRET as string, {
    noTimestamp: true,
  });
  return token;
};

export { createToken };
