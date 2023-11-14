import { Aggregate } from '../../domain/entities/aggregate';

// creates API Gateway Response from the DAPI Response. The format of the body is documented on confluence.
export class ServiceResponsePresenter {
  createServiceResponse(aggregate: Aggregate): any {}
}
