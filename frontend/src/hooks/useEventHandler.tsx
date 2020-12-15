// onClick={createEventHandler(deleteTrackEvent, 'delete', {'page': '/library'})}
// action은 상수로 관리
import api from '../api';

const postLog = async logData => {
  await api.post('/log', logData);
  console.log('logData : ', logData);
};

const useEventHandler = (handler, logData) => {
  return async () => {
    if (logData) await postLog(logData);
    if (handler) await handler();
  };
};

export default useEventHandler;
