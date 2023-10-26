import { ErrorData } from './errorModel';
import { BusinessError } from './businessError';
import businessErrorConstants from './businessErrorConstants';
import { TechnicalError } from './technicalError';
import technicalErrorConstants from './technicalErrorConstants';

/**
 * This function creates an ErrorData object from a BusinessError object
 * @author Ashwin Kumar (n499160)
 *
 * @param error - BusinessError object
 * @returns - ErrorData object containing error code, reason and timestamp
 */
export const createBusinessErrorResponse = (error: BusinessError): ErrorData => {
  const errorData: ErrorData = {
    code: error.code,
    reason: businessErrorConstants[error.code],
    timeStamp: new Date().toLocaleString()
  };

  return errorData;
};

/**
 * This function creates an ErrorData object from a TechnicalError object
 *
 * @param error - TechnicalError object
 * @returns - ErrorData object containing error code, reason and timestamp
 */
export const createTechnicalErrorResponse = (error: TechnicalError): ErrorData => {
  const errorData: ErrorData = {
    code: error.code,
    reason: technicalErrorConstants[error.code],
    timeStamp: new Date().toLocaleString()
  };

  return errorData;
};
