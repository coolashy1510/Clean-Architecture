import { iServiceGateway } from '../../use-cases/interfaces/iServiceGateway';

export class ServiceGateway implements iServiceGateway {
  // The configType is passed on to the method here, a lookup is done on the param store gateway and the corresponding
  // connection details are used to call DAPI journeys API
  proxyCallToDapi(request: any): any {
    // Code to make a POST call to the DAPI endpoint
  }
}
