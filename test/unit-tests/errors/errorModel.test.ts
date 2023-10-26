import { ErrorData, ErrorDataModel } from '../../../src/errors/errorModel';

/**
 * Test class for ErrorModel module
 * @author Ashwin Kumar (n499160)
 */

/*
 * Test case should define the ErrorData interface correctly as expected.
 */
describe('errorModel', () => {
  it('should define the ErrorData interface correctly', () => {
    const errorData: ErrorData = {
      code: 'SOME_ERROR',
      reason: 'Some error occurred',
      timeStamp: '2023-05-28T12:34:56'
    };

    // Using the toEqual assertion to check if its properties match the expected types (String).
    expect(errorData).toEqual({
      code: expect.any(String),
      reason: expect.any(String),
      timeStamp: expect.any(String)
    });
  });

  /*
   * Test case should define the ErrorDataModel interface correctly as expected.
   */
  it('should define the ErrorDataModel interface correctly', () => {
    const errorDataModel: ErrorDataModel = {
      SOME_ERROR: 'Some error occurred'
    };

    /* Using the expect.objectContaining matcher to ensure that the object contains the expected key-value pair.
    We specify that the object should contain the key 'SOME_ERROR' with a value of expect.any(String). */
    expect(errorDataModel).toEqual(
      expect.objectContaining({
        SOME_ERROR: expect.any(String)
      })
    );
  });
});
