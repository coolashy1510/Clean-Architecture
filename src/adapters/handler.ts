import { ServiceUseCase } from '../use-cases/serviceUseCase';
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context, KinesisStreamEvent } from 'aws-lambda';
import logger from '../frameworks/util/logger';
import { ErrorHandler } from '../frameworks/errors/errorHandler';
import { ErrorData } from '../frameworks/errors/errorModel';

/**
 ** Entry point of service
 ** Service Description Goes here
 *
 * @author Kritika Tiwary (n433354) & Ashwin Kumar (n499160)
 *
 * @param { Anyevent } event - Any Input event
 * @param { Context } context - AWS lambda context
 */
// ! Always add a type and AVOID USING ANY
export const handleEvent = async (event: any, context: any): Promise<any> => {
  // Sets the defaultMeta in logger object with awsRequestId, so as to add it in the logger configuration
  if (context.awsRequestId) {
    logger.defaultMeta = { awsRequestId: context.awsRequestId };
  }
  try {
    // 1. makes a call to the use-case and passes input
    const useCase: ServiceUseCase = new ServiceUseCase();
    return useCase.createJourneys(event);

    // 2. handler also takes output of the use case and creates the api gateway response via the presenter/sec adapter
  } catch (error) {
    // create and return api gateway response and error handling if any
    return ErrorHandler(error as ErrorData);
  }
};
