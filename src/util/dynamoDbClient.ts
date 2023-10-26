import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { AWS_REGION } from '../service/serviceConstants';

/**
 * This module is intended to create DynamoDBClient
 *
 * @author Rakhi Sasikumar (n516973)
 *
 * @returns DynamoDBClient
 */
export const getDynamoDbClient = (): DynamoDBClient => {
  const dynamoDbClient = new DynamoDBClient({ region: AWS_REGION });
  return dynamoDbClient;
};
