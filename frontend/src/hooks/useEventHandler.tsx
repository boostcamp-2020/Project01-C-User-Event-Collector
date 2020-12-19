// onClick={createEventHandler(deleteTrackEvent, 'delete', {'page': '/library'})}
// action은 상수로 관리
import api from '../api';

const postLog = logData => {
  console.log('postLog start');
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
