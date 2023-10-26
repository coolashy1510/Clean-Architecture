import { getBaseUrlAndContextPath } from '../validator/ssmValidator';
import logger from './logger';

let baseUrl: string;
let contextPath: string;

/**
 ** This is a wrapper class to get the baseUrl and contextPath from SSM.
 * @author Ashwin Kumar (n499160)
 * @returns {Promise<void>}
 */
export const initBaseUrlAndContextPath = async (): Promise<void> => {
  try {
    const { baseUrl: newBaseUrl, contextPath: newContextPath } = await getBaseUrlAndContextPath();
    baseUrl = newBaseUrl;
    contextPath = newContextPath;
  } catch (error) {
    logger.error('Error occured while initializing SSM parameter store');
  }
};

export const getBaseUrl = (): string => baseUrl;
export const getContextPath = (): string => contextPath;
