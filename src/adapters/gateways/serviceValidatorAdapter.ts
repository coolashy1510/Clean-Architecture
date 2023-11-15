import { APIGatewayProxyEvent, APIGatewayProxyResult, Context, KinesisStreamEvent } from 'aws-lambda';
import { StatusCodes } from 'http-status-codes';
import { TechnicalError } from '../../frameworks/errors/technicalError';

/**
 * ServiceValidatorAdapter Class
 * Validates the input event for the service.
 *
 * @class
 * @author
 */
export class ServiceValidatorAdapter {
  /**
   * Validates the input event.
   *
   * @param {any} event - The input event to be validated.
   * @throws {TechnicalError} - Throws a TechnicalError if the event is not provided.
   */
  validate(event: any): void {
    // Validates event
    if (!event) {
      throw new TechnicalError('OLCI_SERVICE_4001', StatusCodes.BAD_REQUEST);
    }
  }
}
