import { BusinessError } from '../../../src/errors/businessError';
import businessErrorConstants from '../../../src/errors/businessErrorConstants';
import { ErrorData } from '../../../src/errors/errorModel';
import { createBusinessErrorResponse, createTechnicalErrorResponse } from '../../../src/errors/errorResponse';
import { TechnicalError } from '../../../src/errors/technicalError';
import technicalErrorConstants from '../../../src/errors/technicalErrorConstants';

/**
 * Test class for ErrorResponse module
 * @author Ashwin Kumar (n499160)
 */

describe('errorHandlers', () => {
  describe('createBusinessErrorResponse', () => {
    /*
     * Test case should create an ErrorData object from a BusinessError object as expected.
     */
    it('should create an ErrorData object from a BusinessError object', () => {
      const error: BusinessError = new BusinessError('OLCI_SERVICE_NAME_1001', 500);

      const expectedErrorData: ErrorData = {
        code: 'OLCI_SERVICE_NAME_1001',
        reason: 'UNEXPECTED_BUSINESS_ERROR',
        timeStamp: expect.any(String)
      };

      const result: ErrorData = createBusinessErrorResponse(error);

      expect(result).toEqual(expectedErrorData);
    });

    /*
     * Test case should handle unknown BusinessError code as expected.
     */
    it('should handle unknown BusinessError code', () => {
      const error: BusinessError = new BusinessError('BUSINESS_ERROR', 500);

      const expectedErrorData: ErrorData = {
        code: 'BUSINESS_ERROR',
        reason: businessErrorConstants['BUSINESS_ERROR'],
        timeStamp: expect.any(String)
      };

      const result: ErrorData = createBusinessErrorResponse(error);

      expect(result).toEqual(expectedErrorData);
    });
  });

  describe('createTechnicalErrorResponse', () => {
    /*
     * Test case should handle unknown TechnicalError code as expected.
     */
    it('should handle unknown TechnicalError code', () => {
      const error: TechnicalError = new TechnicalError('TECHNICAL_ERROR', 500);

      const expectedErrorData: ErrorData = {
        code: 'TECHNICAL_ERROR',
        reason: technicalErrorConstants['TECHNICAL_ERROR'],
        timeStamp: expect.any(String)
      };

      const result: ErrorData = createTechnicalErrorResponse(error);

      expect(result).toEqual(expectedErrorData);
    });
  });
});
