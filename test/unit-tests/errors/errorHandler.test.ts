import { TechnicalError } from '../../../src/errors/technicalError';
import { BusinessError } from '../../../src/errors/businessError';
import { createBusinessErrorResponse, createTechnicalErrorResponse } from '../../../src/errors/errorResponse';
import { ErrorHandler } from '../../../src/errors/errorHandler';
import { ServiceResponse } from '../../../src/model/serviceResponse';
import logger from '.../../../src/util/logger';
import { ErrorData } from '../../../src/errors/errorModel';

/**
 * Test class for ErrorResponse module
 * @author Ashwin Kumar (n499160)
 */

jest.mock('../../../src/util/logger', () => ({
  error: jest.fn()
}));

// This is used to clear all mock function calls and instances created during each test case.
describe('ErrorHandler', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  /*
   * Test case should handle unknown error and return default ServiceResponse as expected.
   */
  it('should handle unknown error and return default ServiceResponse', () => {
    const error: ErrorData = {
      code: 'UNKNOWN_ERROR',
      reason: 'Unknown Error',
      timeStamp: expect.any(String)
    };

    const result: ServiceResponse = ErrorHandler(error);

    expect(result.statusCode).toBe(500);
    expect(result.body).toBeDefined();

    const parsedBody = JSON.parse(result.body);
    expect(parsedBody.code).toBe('OLCI_GENERIC_ERROR');
    expect(parsedBody.reason).toBe('Internal Server Error');
    expect(parsedBody.timeStamp).toEqual(expect.any(String));
  });

  /*
   * Test case should handle BusinessError and return ServiceResponse as expected.
   */
  it('should handle BusinessError and return ServiceResponse', () => {
    const error = new BusinessError('OLCI_SERVICE_NAME_1001', 500);

    const expectedErrorResponse: ServiceResponse = {
      statusCode: 500,
      body: JSON.stringify(createBusinessErrorResponse(error)),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const result: ServiceResponse = ErrorHandler(error);

    expect(result).toEqual(expectedErrorResponse);
    expect(logger.error).toHaveBeenCalledWith(expectedErrorResponse.body);
  });

  /*
   * Test case should handle TechnicalError and return ServiceResponse as expected.
   */
  it('should handle TechnicalError and return ServiceResponse', () => {
    const error = new TechnicalError('NETWORK_ERROR', 500);

    const expectedErrorResponse: ServiceResponse = {
      statusCode: 500,
      body: JSON.stringify(createTechnicalErrorResponse(error)),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const result: ServiceResponse = ErrorHandler(error);

    expect(result).toEqual(expectedErrorResponse);
    expect(logger.error).toHaveBeenCalledWith(expectedErrorResponse.body);
  });
});
