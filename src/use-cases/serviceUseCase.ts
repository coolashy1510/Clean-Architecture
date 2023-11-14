import { ServiceRequestController } from '../adapters/controllers/serviceRequestController';
import { ConfigGateway } from '../adapters/gateways/configGateway';
import { ProxyDataPropagate } from '../adapters/gateways/proxyDataPropagate';
import { RepositoryGateway } from '../adapters/gateways/repositoryGateway';
import { ServiceGateway } from '../adapters/gateways/serviceGateway';
import { ServiceValidatorAdapter } from '../adapters/gateways/serviceValidatorAdapter';
import { ServiceResponsePresenter } from '../adapters/presenters/serviceResponsePresenter';
import { Aggregate } from '../domain/entities/aggregate';

/**
 *
 */
export class ServiceUseCase {
  // ! Always add a type and AVOID USING ANY
  createJourneys(event: any): any {
    //* pre requisite : Retrieves and validates SSM Params
    const loadConfigurations: ConfigGateway = new ConfigGateway();
    loadConfigurations.getConfigurations();

    //*  Get data from Stream
    // call validator to Validate the input events
    const serviceValidatorAdapter: ServiceValidatorAdapter = new ServiceValidatorAdapter();
    serviceValidatorAdapter.validate(event);

    //* Call to DAPi via proxy
    const serviceGateway: ServiceGateway = new ServiceGateway();
    const serviceRequestController: ServiceRequestController = new ServiceRequestController();
    const proxyResponse: any = serviceGateway.proxyCallToDapi(serviceRequestController.createDAPIRequest(event));

    //* Propagate DAPI Data
    const proxyDataPropagate: ProxyDataPropagate = new ProxyDataPropagate();
    proxyDataPropagate.propagateDAPIData(proxyResponse);

    //* Create Journey Aggregt
    const aggregate: Aggregate = new Aggregate(proxyResponse);

    //* Call repositoryGateway and Persist Aggregate
    const repositoryGateway: RepositoryGateway = new RepositoryGateway();
    repositoryGateway.persistAggregate(aggregate);

    //* Call create-journey-response-adapter and return a response to the handler */
    const serviceResponsePresenter: ServiceResponsePresenter = new ServiceResponsePresenter();
    serviceResponsePresenter.createServiceResponse(aggregate);
  }
}
