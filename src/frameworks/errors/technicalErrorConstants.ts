import { ErrorDataModel } from './errorModel';

/**
 * This is a map of technical error codes to error messages.
 * @author Ashwin Kumar (n499160)
 *
 * Make appropriate errors with codes as below
 * 400X - client errors
 * 500X - server errors
 */
const technicalErrorMap: ErrorDataModel = {
  OLCI_SERVICE_4001: 'Error Description goes here'
};

export default technicalErrorMap;
