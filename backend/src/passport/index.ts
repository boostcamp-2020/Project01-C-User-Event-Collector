import passportNaverConfig from './naver';
import passportJwtConfig from './jwt';

const passportConfig = (): void => {
  passportNaverConfig();
  passportJwtConfig();
};

export default passportConfig;
