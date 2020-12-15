// onClick={createEventHandler(deleteTrackEvent, 'delete', {'page': '/library'})}
// action은 상수로 관리
import api from '../api';

const postLog = async logData => {
  console.log('postLog start');
  await api.post('/log', logData);
};

const useEventHandler = (handler, logData) => {
  return () => {
    if (logData) postLog(logData);
    if (handler) handler();
  };
};

export default useEventHandler;
