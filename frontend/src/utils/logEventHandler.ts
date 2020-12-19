// onClick={createEventHandler(deleteTrackEvent, 'delete', {'page': '/library'})}
// action은 상수로 관리
import api from '@api/index';

const postLog = async logData => {
  await api.post('/log', logData);
};

const logEventHandler = async (handler, logData) => {
  postLog(logData);
};

export default logEventHandler;
