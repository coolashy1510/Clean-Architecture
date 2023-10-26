/**
 * This module contains the code to read configuration details from AWS Parameter Store and Cache the result for an hour
 * @author Ashwin Kumar (n499160)
 */
import { GetParametersCommand, GetParametersCommandOutput, SSMClient } from '@aws-sdk/client-ssm';
import { StatusCodes } from 'http-status-codes';
import ms from 'ms';
import { TechnicalError } from '../errors/technicalError';
import { SSMParam } from '../model/ssmParameter';
import { AWS_REGION, CACHE_EXPIRATION } from '../service/serviceConstants';
import logger from './logger';

/**
 ** The Config type represents an object with two properties:
 ** values: It is a property of type Record<string, string | undefined>. This indicates that the values property is an object where the keys are strings and the values can be either strings or undefined.
 ** expiryDate: It is an optional property of type Date to define cache expiration.
 */
type Config = {
  values: Record<string, string | undefined>;
  expiryDate?: Date;
};

const config: Config = { values: {} };

/**
 ** It loads the values from SSM parameter store if the cache has expired.
 * @param parameterCodes - The list of parameter codes to be read from SSM Parameter store
 */
const loadParameters = async (parameterCodes: string[]): Promise<void> => {
  // Cache duration for configuration values
  let cacheDuration = CACHE_EXPIRATION;
  if (process.env.CACHE_EXPIRATION) {
    cacheDuration = process.env.CACHE_EXPIRATION;
  }
  if (!config.expiryDate || hasCacheExpired()) {
    logger.info(`Cache loaded with Parameter Store values for (${parameterCodes})`);
    config.values = {};

    const ssmClient = new SSMClient({ region: AWS_REGION });

    try {
      const response: GetParametersCommandOutput = await ssmClient.send(
        new GetParametersCommand({
          Names: parameterCodes,
          WithDecryption: true
        })
      );

      if (!response.Parameters || response.Parameters.length === 0) {
        logger.error(`Parameter store is not available for the environment (${parameterCodes})`);
        throw new TechnicalError('OLCI_SERVICE_NAME_5002', StatusCodes.INTERNAL_SERVER_ERROR);
      }

      response.Parameters.forEach(param => {
        if (param.Name && param.Value) {
          config.values[param.Name] = param.Value;
        }
      });
    } catch (error) {
      logger.error(`Error occurred while reading SSM parameters (${parameterCodes})`);
      throw new TechnicalError('OLCI_SERVICE_NAME_5002', StatusCodes.INTERNAL_SERVER_ERROR);
    }

    config.expiryDate = new Date(Date.now() + ms(cacheDuration));
  }
};

/**
 ** This method reads the configuration details from AWS Parameter Store.
 * @param parameterCode - parameter code to be read from SSM Parameter store
 * @returns a promise of type SSMParam
 */
export const getSSMParam = async (parameterCode: string): Promise<SSMParam> => {
  return getSSMParams([parameterCode]);
};

/**
 ** Reads the configuration details for this service that are stored in SSM Parameter store.
 * @param {string[]} parameterCodes - The list of parameter codes to be read from SSM Parameter store
 * @returns a promise of type SSMParam
 */
export const getSSMParams = async (parameterCodes: string[]): Promise<SSMParam> => {
  await loadParameters(parameterCodes);

  const outParam: SSMParam = {};
  parameterCodes.forEach(parameterCode => {
    const value = config.values[parameterCode];
    if (value !== undefined) {
      outParam[parameterCode] = value;
    }
  });

  return outParam;
};

/**
 ** Checks if the cache has expired
 * @returns true if the cache has expired, false otherwise.
 */
const hasCacheExpired = () => config.expiryDate && new Date() > config.expiryDate;
