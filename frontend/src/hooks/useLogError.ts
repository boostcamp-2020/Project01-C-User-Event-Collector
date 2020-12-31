import { useEffect } from 'react';
import api from '@api/index';

interface IErrorLog {
  eventTime: Date;
  eventName: string;
  parameters: { log: string };
}

const createErrorLogObject = (error: Error): IErrorLog => {
  return {
    eventTime: new Date(),
    eventName: 'error_event',
    parameters: { log: error.message },
  };
};

const errorHandler = ({ error }: { error: Error }): void => {
  api.post('/log', createErrorLogObject(error));
};

const rejectionHandler = ({ reason }: { reason: Error }): void => {
  api.post('/log', createErrorLogObject(reason));
};

const addErrorLogger = (): void => {
  window.addEventListener('error', errorHandler);
  window.addEventListener('unhandledrejection', rejectionHandler);
};

const removeErrorLogger = (): void => {
  window.removeEventListener('error', errorHandler);
  window.removeEventListener('unhandledrejection', rejectionHandler);
};

const useLogError = (): void => {
  useEffect(() => {
    addErrorLogger();
    return removeErrorLogger;
  }, []);
};

export default useLogError;
