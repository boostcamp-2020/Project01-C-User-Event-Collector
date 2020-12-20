import { useEffect } from 'react';

const errorHandler = ({ error }) => {
  console.log('************** Error Handler');
  console.log(error);
};

const rejectionHandler = ({ reason }) => {
  console.log('************** Rejection Handler');
  console.log(reason);
};

const addErrorLogger = () => {
  window.addEventListener('error', errorHandler);
  window.addEventListener('unhandledrejection', rejectionHandler);
};

const removeErrorLogger = () => {
  window.removeEventListener('error', errorHandler);
  window.removeEventListener('unhandledrejection', rejectionHandler);
};

const useLogError = () => {
  useEffect(() => {
    addErrorLogger();
    return removeErrorLogger;
  }, []);
};

export default useLogError;
