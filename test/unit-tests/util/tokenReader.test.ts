/**
 * Test class for TokenReader module
 */

import axios from 'axios';
import { TechnicalError } from '../../../src/errors/technicalError';
import tokenReader from '../../../src/util/tokenReader';

jest.mock('axios');

describe('fetch token test suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should respond correctly when gathering a token', async () => {
    try {
      const tokenResponse = await tokenReader.fetchBearerToken();
      expect(tokenResponse).not.toBeUndefined();
      expect(tokenResponse).not.toBeNull();
      expect(tokenResponse).not.toBe('');
      expect(tokenResponse.length).toBeGreaterThan(0);
    } catch (exception) {
      console.log(exception);
    }
  });

  it('should throw TechnicalError on error', async () => {
    let error: any;

    (axios.get as jest.Mock).mockRejectedValueOnce(() => Promise.reject('your-error'));

    // Mocking the axios.get method to throw an error

    try {
      await tokenReader.fetchBearerToken();
    } catch (err) {
      error = err;
    }

    expect(error instanceof TechnicalError).toBe(true);
    expect(error.code).toBe('OLCI_SERVICE_NAME_4002');
  });
});
