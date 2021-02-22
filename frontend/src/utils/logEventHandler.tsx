import api from '../api';

const postLog = logData => {
  const timeStampedLog = { ...logData, eventTime: new Date() };
  api.post('/log', timeStampedLog);
};

const logEventHandler = (handler, logData) => {
  return () => {
    if (handler) handler();
    if (logData) postLog(logData);
  };
};

export default logEventHandler;
