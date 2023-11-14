import { iProxyDataPropagate } from '../../use-cases/interfaces/iProxyDataPropagate';

export class ProxyDataPropagate implements iProxyDataPropagate {
  // This method accepts the DAPI journeys response for DAPI bookings and adds it to the corresponding DAPI Data stream
  propagateDAPIData(dapiResponse: any): any {
    // SDK code to add the DAPI response to the corresponding Kinesis Data Stream
  }
}
