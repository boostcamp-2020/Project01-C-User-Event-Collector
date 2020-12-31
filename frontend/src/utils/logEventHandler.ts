import api from '@api/index';

const postLog = async logData => {
  await api.post('/log', logData);
};

const logEventHandler = async (handler, logData) => {
  postLog(logData);
};

export default logEventHandler;
