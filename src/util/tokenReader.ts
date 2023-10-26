import axios from 'axios';
import logger from './logger';
import { TechnicalError } from '../errors/technicalError';
import { StatusCodes } from 'http-status-codes';

/**
 *
 * Reads the bearer token value from an AWS lambda which generates bearer token by making DAPI call.
 *
 * @author Deepthi Antony (n515070)
 *
 * @param tokenLambdaFunctionUrl
 * @returns Promise of token of type string
 */

// Endpoint for the tokenLambda function
const tokenLambdaFunctionUrl = 'https://v76of2ae2h4jg5ccmbvuevcyna0qtdun.lambda-url.eu-west-1.on.aws/';

export async function fetchBearerToken(): Promise<string> {
  try {
    const response = await axios.get(tokenLambdaFunctionUrl);
    const data = response.data;
    const token = data.access_token;
    return token;
  } catch (error) {
    logger.error('Error occured while fetching bearer token', { error });
    throw new TechnicalError('OLCI_SERVICE_NAME_4002', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

export default { fetchBearerToken };
