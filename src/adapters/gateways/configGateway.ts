import { iConfigGateway } from '../../use-cases/interfaces/iConfigGateway';

/**
 * ConfigGateway class implements iConfigGateway interface.
 * Retrieves configuration details from AWS services viz,. the parameter store.
 */
export class ConfigGateway implements iConfigGateway {
  // The config type could either be DAPI/CC and the corresponding connection details would be retrieved from the param store
  getConfigurations(): any {
    // SDK code for calling the param store based on the input config type and returning the connection details to the journey Gateway
  }
}
