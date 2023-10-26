/**
 * The SSMParam is an interface to map the response of the parameter store
 */
export interface SSMParam {
  /**
   * This property defines the key-value pair of the parameter store data.
   * @type {string}
   */
  [key: string]: string;
}
