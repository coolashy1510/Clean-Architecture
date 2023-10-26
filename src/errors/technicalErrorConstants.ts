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
  OLCI_DYNAMODB_4001: 'Error in retrieveServiceEndpoint',
  OLCI_SERVICE_NAME_4002: 'Error in fetchBearerToken',
  OLCI_SERVICE_NAME_5001: 'baseUrl or contextPath is not available',
  OLCI_SERVICE_NAME_5002: 'Error in Parameter Store'
};

export default technicalErrorMap;
