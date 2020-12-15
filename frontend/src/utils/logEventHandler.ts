// onClick={createEventHandler(deleteTrackEvent, 'delete', {'page': '/library'})}
// action은 상수로 관리
import api from '@api/index';

const postLog = async logData => {
  await api.post('/log', logData);
};

const logEventHandler = (handler, logData) => {
  return () => {
    if (logData) postLog(logData);
    if (handler) handler();
  };
};

export default logEventHandler;
