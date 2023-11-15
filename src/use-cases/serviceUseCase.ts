import { ServiceRequestController } from '../adapters/controllers/serviceRequestController';
import { ConfigGateway } from '../adapters/gateways/configGateway';
import { ProxyDataPropagate } from '../adapters/gateways/proxyDataPropagate';
import { RepositoryGateway } from '../adapters/gateways/repositoryGateway';
import { ServiceGateway } from '../adapters/gateways/serviceGateway';
import { ServiceValidatorAdapter } from '../adapters/gateways/serviceValidatorAdapter';
import { ServiceResponsePresenter } from '../adapters/presenters/serviceResponsePresenter';
import { Aggregate } from '../domain/entities/aggregate';

/**
 ** Service Use Case Class
 ** Handles the business logic based on input events.
 *
 * @class
 * @author
 */
export class ServiceUseCase {
  // ! Always add a type and AVOID USING ANY - remove this line when committing

  /**
   * Service use case based on input events.
   *
   * @param {any} event - The input event data.
   * @returns {any} - The response data indicating the success of the operation.
   */
  serviceUseCase(event: any): any {
    //* Pre-requisite: Retrieves and validates SSM Params
    const loadConfigurations: ConfigGateway = new ConfigGateway();
    loadConfigurations.getConfigurations();

    //* Validate the input events using the service validator adapter
    const serviceValidatorAdapter: ServiceValidatorAdapter = new ServiceValidatorAdapter();
    serviceValidatorAdapter.validate(event);

    //* Call DAPI via proxy and get the response
    const serviceGateway: ServiceGateway = new ServiceGateway();
    const serviceRequestController: ServiceRequestController = new ServiceRequestController();
    const proxyResponse: any = serviceGateway.proxyCallToDapi(serviceRequestController.createDAPIRequest(event));

    //* Propagate DAPI Data
    const proxyDataPropagate: ProxyDataPropagate = new ProxyDataPropagate();
    proxyDataPropagate.propagateDAPIData(proxyResponse);

    //* Create Service Aggregte
    const aggregate: Aggregate = new Aggregate(proxyResponse);

    //* Call Repository Gateway and Persist Aggregate
    const repositoryGateway: RepositoryGateway = new RepositoryGateway();
    repositoryGateway.persistAggregate(aggregate);

    //* Call serviceResponsePresenter and return a response to the handler
    const serviceResponsePresenter: ServiceResponsePresenter = new ServiceResponsePresenter();
    serviceResponsePresenter.createServiceResponse(aggregate);
  }
}
