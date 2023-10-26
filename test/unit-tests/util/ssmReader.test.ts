import { StatusCodes } from 'http-status-codes';
import { TechnicalError } from '../../../src/errors/technicalError';
import { getSSMParam } from '../../../src/util/ssmReader';
import { SSMClient, GetParametersCommandOutput } from '@aws-sdk/client-ssm';

// Storing the current state of env
const env = process.env;

afterEach(() => {
  process.env = env;
});

beforeEach(() => {
  jest.resetModules();
  process.env.CACHE_EXPIRATION = '1ms';
});

jest.mock('@aws-sdk/client-ssm', () => {
  const mockSSMClient = {
    send: jest.fn().mockResolvedValue({
      Parameters: [{ Name: '/parameter1', Value: 'value1' }]
    }) as unknown as GetParametersCommandOutput
  };
  return {
    SSMClient: jest.fn(() => mockSSMClient),
    GetParametersCommand: jest.fn().mockImplementation(() => ({ send: jest.fn() }))
  };
});

describe('getSSMParam', () => {
  it('should call getSSMParams with single parameter code', async () => {
    const parameterCode = '/parameter1';
    const result = await getSSMParam(parameterCode);

    expect(SSMClient).toHaveBeenCalledTimes(1);
    expect(SSMClient).toHaveBeenCalledWith({ region: expect.any(String) });
    expect(result).toEqual({
      '/parameter1': 'value1'
    });
  });

  it('should throw TechnicalError if the parameter store is not available', async () => {
    const parameterCode = '/nonexistent-parameter';
    (SSMClient as jest.Mock).mockImplementationOnce(() => {
      throw new TechnicalError('OLCI_SERVICE_NAME_5001', StatusCodes.INTERNAL_SERVER_ERROR);
    });

    let error: any;
    try {
      await getSSMParam(parameterCode);
    } catch (err) {
      error = err;
    }
    expect(error instanceof TechnicalError).toBe(true);
    expect(error.code).toBe('OLCI_SERVICE_NAME_5001');
  });

  it('should reload parameters if cache has expired', async () => {
    const parameterCode = '/parameter1';

    // Set cacheDuration to 1 second
    jest.spyOn(Date.prototype, 'getTime').mockReturnValue(0);

    // Set cacheDuration to 1 second
    const cacheDuration = 1000;
    // Get the current time
    const currentTime = Date.now();

    // Calculate the cache expiration date
    const cacheExpirationDate = currentTime - cacheDuration - 1;

    // Mock the Date.now function to simulate cache expiration
    jest.spyOn(Date, 'now').mockReturnValueOnce(cacheExpirationDate);

    // Call getSSMParam, expecting cache to be reloaded
    await getSSMParam(parameterCode);

    expect(SSMClient).toHaveBeenCalledTimes(1);
    expect(SSMClient).toHaveBeenCalledWith({ region: expect.any(String) });
  });
});
