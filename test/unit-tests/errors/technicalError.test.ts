import { TechnicalError } from '../../../src/errors/technicalError';
import { ErrorDataModel } from '../../../src/errors/errorModel';
import technicalErrorConstants from '../../../src/errors/technicalErrorConstants';

/**
 * Test class for TechnicalError module
 * @author Ashwin Kumar (n499160)
 */

/*
 * Test case to create TechnicalError instance with the correct code and status as expected.
 */
describe('TechnicalError', () => {
  it('should create a TechnicalError instance with the correct code and status', () => {
    const code = 'SOME_ERROR';
    const status = 500;
    const description = 'Some error occurred';

    (technicalErrorConstants as ErrorDataModel)[code] = description;

    const error = new TechnicalError(code, status);

    expect(error).toBeInstanceOf(TechnicalError);
    expect(error.code).toBe(code);
    expect(error.status).toBe(status);
  });

  /*
   * Test case should set the error message based on the code as expected.
   */
  it('should set the error message based on the code', () => {
    const status = 500;
    const code = 'SOME_ERROR';
    const description = 'Some error occurred';

    (technicalErrorConstants as ErrorDataModel)[code] = description;

    const error = new TechnicalError(code, status);

    expect(error).toBeInstanceOf(TechnicalError);
    expect(error.code).toBe(code);
    expect(error.status).toBe(status);
  });
});
