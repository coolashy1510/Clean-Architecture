import { BusinessError } from '../../../src/errors/businessError';
import { ErrorDataModel } from '../../../src/errors/errorModel';
import businessErrorConstants from '../../../src/errors/businessErrorConstants';

/**
 * Test class for BusinessError module
 * @author Ashwin Kumar (n499160)
 */

/*
 * Test case to create BusinessError instance with the correct code and status as expected.
 */
describe('BusinessError', () => {
  it('should create a BusinessError instance with the correct code and status', () => {
    const code = 'SOME_ERROR';
    const status = 500;
    const description = 'Some error occurred';

    (businessErrorConstants as ErrorDataModel)[code] = description;

    const error = new BusinessError(code, status);

    expect(error).toBeInstanceOf(BusinessError);
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

    (businessErrorConstants as ErrorDataModel)[code] = description;

    const error = new BusinessError(code, status);

    expect(error).toBeInstanceOf(BusinessError);
    expect(error.code).toBe(code);
    expect(error.status).toBe(status);
  });

  it('should create a BusinessError instance with the correct code, status and title', () => {
    const code = 'SOME_ERROR';
    const status = 200;
    const title = 'High priority comment';
    (businessErrorConstants as ErrorDataModel)[code] = '';

    const error = new BusinessError(code, status, title);

    expect(error).toBeInstanceOf(BusinessError);
    expect(error.code).toBe(code);
    expect(error.status).toBe(status);
    expect(error.reason).toBe(title);
  });
});
