import { ServiceResponse } from '../../domain/entities/serviceResponse';
import logger from '../util/logger';
import { BusinessError } from './businessError';
import { ErrorData } from './errorModel';
import { createBusinessErrorResponse, createTechnicalErrorResponse } from './errorResponse';
import { TechnicalError } from './technicalError';

/**
 * This function handles errors and returns a ServiceResponse object
 * @author Ashwin Kumar (n499160)
 *
 * @param error - Error object to be handled
 * @returns - ServiceResponse object with statusCode and error details
 */
export function ErrorHandler(error: ErrorData): ServiceResponse {
  const timestamp = new Date().toLocaleString('en', { timeZone: 'UTC' });
  if (error instanceof BusinessError) {
    const businessErrorResponse: ServiceResponse = {
      statusCode: error.status,
      body: JSON.stringify(createBusinessErrorResponse(error)),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    logger.error(`${businessErrorResponse.body}`);
    return businessErrorResponse;
  } else if (error instanceof TechnicalError) {
    const technicalErrorResponse: ServiceResponse = {
      statusCode: error.status,
      body: JSON.stringify(createTechnicalErrorResponse(error)),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    logger.error(`${technicalErrorResponse.body}`);
    return technicalErrorResponse;
  } else {
    const defaultErrorResponse: ServiceResponse = {
      statusCode: 500,
      body: JSON.stringify({
        code: 'OLCI_GENERIC_ERROR',
        reason: 'Internal Server Error',
        timeStamp: timestamp
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    logger.error(`${defaultErrorResponse}`);
    return defaultErrorResponse;
  }
}
