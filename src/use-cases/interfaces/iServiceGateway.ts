/**
 * Service Gateway Interface
 *
 * @description
 * This interface defines the contract for making a proxy call to DAPI.
 * It includes a method to proxy a request to DAPI, where the connection details are retrieved based on the provided config type.
 */
export interface iServiceGateway {
  /**
   * Proxy Call to DAPI
   *
   * @param {any} request - The request payload to be proxied to DAPI.
   * @returns {any} - The method should handle the proxying process and return the DAPI response accordingly.
   */
  proxyCallToDapi(request: any): any;
}
