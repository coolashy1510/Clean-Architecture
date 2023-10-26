import technicalErrorMap from '../../../src/errors/technicalErrorConstants';

/**
 * Test class for TechnicalErrorConstants module
 * @author Ashwin Kumar (n499160)
 */

/*
 * Test case should contain the expected error code and message as expected.
 */
describe('technicalErrorMap', () => {
  it('should contain the expected error code and message', () => {
    const expectedErrorData = {
      OLCI_DYNAMODB_4001: 'Error in retrieveServiceEndpoint',
      OLCI_SERVICE_NAME_4002: 'Error in fetchBearerToken'
    };
    expect(technicalErrorMap).toEqual(expectedErrorData);
  });
});
