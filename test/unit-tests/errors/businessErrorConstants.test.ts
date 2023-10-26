import businessErrorMap from '../../../src/errors/businessErrorConstants';

/**
 * Test class for BusinessErrorConstants module
 * @author Ashwin Kumar (n499160)
 */

/*
 * Test case should contain the expected error code and message as expected.
 */
describe('businessErrorMap', () => {
  it('should contain the expected error code and message', () => {
    const expectedErrorData = {
      OLCI_SERVICE_NAME_1001: 'UNEXPECTED_BUSINESS_ERROR'
    };
    expect(businessErrorMap).toEqual(expectedErrorData);
  });
});
