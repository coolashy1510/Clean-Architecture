import { StatusCodes } from 'http-status-codes';
import { TechnicalError } from '../errors/technicalError';
import { SSMParam } from '../model/ssmParameter';
import logger from '../util/logger';
import { getSSMParams } from '../util/ssmReader';

/**
 ** This function helps to retrieve the SSM parameter values.
 *
 * @author Ashwin Kumar (n499160)
 *
 * @returns a promise of SSMParam
 */
const retrieveSSMParameter = async (): Promise<SSMParam> => {
  // This line essentially creates an array with the value of SSM_PARAMETER_STORE_ID if it exists, or an empty array if it doesn't.
  const parameterName = process.env.SSM_PARAMETER_STORE_ID ? [process.env.SSM_PARAMETER_STORE_ID] : [];
  return getSSMParams(parameterName);
};

/**
 ** This function is used to retrieve the BaseUrl and ContextPath from the retrieved values from SSM parameter store
 *
 * @returns a promise containing baseUrl and contextPath
 */
const getBaseUrlAndContextPath = async (): Promise<{ baseUrl: string; contextPath: string }> => {
  const ssmParam: SSMParam = await retrieveSSMParameter();

  // This line essentially retrieves the value corresponding to SSM_PARAMETER_STORE_ID from ssmParam,
  const ssmValue: string | undefined = ssmParam[process.env.SSM_PARAMETER_STORE_ID ?? ''];
  if (!ssmValue) {
    logger.error('Error occured while fetching BaseUrlAndContextPath');
    throw new TechnicalError('OLCI_SERVICE_NAME_5001', StatusCodes.INTERNAL_SERVER_ERROR);
  }

  return JSON.parse(ssmValue);
};

export { getBaseUrlAndContextPath, retrieveSSMParameter };
