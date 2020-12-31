import api from '../api';

const postLog = logData => {
  const timeStampedLog = { ...logData, eventTime: new Date() };
  api.post('/log', timeStampedLog);
};

const useEventHandler = (handler, logData) => {
  return async () => {
    if (handler) await handler();
    if (logData) postLog(logData);
  };
};

export default useEventHandler;
