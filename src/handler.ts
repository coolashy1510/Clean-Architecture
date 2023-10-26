import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import logger from './util/logger';

export const handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
  const queries = JSON.stringify(event.queryStringParameters);
  logger.info(`Context: ${JSON.stringify(context, null, 2)}`);
  // Sets the defaultMeta in logger object with awsRequestId, so as to add it in the logger configuration
  if (context.awsRequestId) {
    logger.defaultMeta = { awsRequestId: context.awsRequestId };
  }
  return {
    statusCode: 200,
    body: `Queries: ${queries}`
  };
};
