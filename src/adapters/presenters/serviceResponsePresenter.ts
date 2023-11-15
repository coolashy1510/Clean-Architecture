import { Aggregate } from '../../domain/entities/aggregate';
/**
 * ServiceResponsePresenter Class
 * Creates an API Gateway Response from the DAPI Response. The format of the body is documented on Confluence.
 *
 * @class
 * @author
 */
export class ServiceResponsePresenter {
  /**
   * Creates an API Gateway Response based on the provided aggregate.
   *
   * @param {Aggregate} aggregate - The aggregate used to generate the API Gateway Response.
   * @returns {any} - The API Gateway Response.
   */
  createServiceResponse(aggregate: Aggregate): any {
    // Implementation details for creating the API Gateway Response
    // Include any logic or formatting needed to generate the response
  }
}
