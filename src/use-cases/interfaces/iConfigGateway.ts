/**
 * Configuration Gateway Interface
 *
 * @description
 * This interface defines the contract for a configuration gateway, responsible for retrieving configuration details from AWS services, such as the parameter store.
 *
 * @interface
 * @author
 */
export interface iConfigGateway {
  /**
   * Get Configurations
   *
   * @returns {any} - The method should return the configuration details based on the specified config type.
   */
  getConfigurations(): any;
}
