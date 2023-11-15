/**
 * Proxy Data Propagate Interface
 *
 * @description
 * This interface defines the contract for propagating DAPI responseto the corresponding AWS services.
 *
 * @interface
 * @author
 */
export interface iProxyDataPropagate {
  /**
   * Propagate DAPI Data
   *
   * @param {any} dapiResponse - The DAPI response for DAPI bookings.
   * @returns {any} - The method should handle the propagation of DAPI data and return the result accordingly.
   */
  propagateDAPIData(dapiResponse: any): any;
}
