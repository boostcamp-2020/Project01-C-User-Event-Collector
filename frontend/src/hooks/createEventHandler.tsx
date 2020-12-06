// onClick={createEventHandler(deleteTrackEvent, 'delete', {'page': '/library'})}
// action은 상수로 관리
function createEventHandler(handler, action, eventParam) {
  function send() {
    switch (action) {
      case 'moveToPage':
        // logApi 보내는 코드
        return null;
      default:
        return null;
    }
  }
  return () => {
    send();
    handler();
  };
}

export default createEventHandler;
