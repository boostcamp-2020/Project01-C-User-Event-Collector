import { mutate } from 'swr';
import api from '../api';

const postLog = async logData => {
  const timeStampedLog = { ...logData, eventTime: new Date() };
  await api.post('/log', timeStampedLog);
  mutate(
    '/log',
    data => {
      return { ...data, data: [...data.data, logData] };
    },
    true,
  );
};

const logEventHandler = (handler, logData) => {
  return () => {
    if (handler) handler();
    if (logData) postLog(logData);
  };
};

export default logEventHandler;
