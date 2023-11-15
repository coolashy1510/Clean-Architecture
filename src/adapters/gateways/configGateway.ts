import { iConfigGateway } from '../../use-cases/interfaces/iConfigGateway';

/**
 * ConfigGateway Class
 * Implements the iConfigGateway interface for retrieving configuration details.
 *
 * @class
 * @implements {iConfigGateway}
 * @author
 */
export class ConfigGateway implements iConfigGateway {
  /**
   * Retrieves configuration details from AWS services, specifically the parameter store.
   *
   * @returns {any} - The connection details based on the configuration type.
   */
  getConfigurations(): any {
    // SDK code for calling the parameter store based on the input config type
    // and returning the connection details to the journey Gateway
  }
}
