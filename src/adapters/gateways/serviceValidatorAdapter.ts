import { APIGatewayProxyEvent, APIGatewayProxyResult, Context, KinesisStreamEvent } from 'aws-lambda';
import { StatusCodes } from 'http-status-codes';
import { TechnicalError } from '../../frameworks/errors/technicalError';

/**
 ** Validates the Input event
 *
 * @author Ashwin Kumar (n499160)
 *
 * @param { event } - the input event
 */
export class ServiceValidatorAdapter {
  validate(event: any): void {
    // Validates event
    if (!event) {
      throw new TechnicalError('OLCI_SERVICE_4001', StatusCodes.BAD_REQUEST);
    }
  }
}
