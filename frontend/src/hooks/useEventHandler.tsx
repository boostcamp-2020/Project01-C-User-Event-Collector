// onClick={createEventHandler(deleteTrackEvent, 'delete', {'page': '/library'})}
// action은 상수로 관리
import api from '../api';

const postLog = async logData => {
  console.log('postLog start');
  await api.post('/log', logData);
};

const useEventHandler = (handler, logData) => {
  return async () => {
    if (logData) await postLog(logData);
    if (handler) await handler();
  };
};

export default useEventHandler;
