/**
 * The ServiceResponse is an Interface to map the response of the service with StatusCode and Body
 */
export interface ServiceResponse {
  /**
   * This property represents the HTTP Status Code of the operation
   * @type {number}
   */
  statusCode: number;

  /**
   * This property represents the response body and it can either be the service response or the Error object
   * @type {string}
   */
  body: string;

  /**
   * This property represents the header of the response
   * @type {[key: string]: string;}
   */
  headers?: {
    [key: string]: string;
  };
}
