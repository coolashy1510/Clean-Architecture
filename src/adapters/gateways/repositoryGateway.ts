import { Aggregate } from '../../domain/entities/aggregate';
import { iRepositoryGateway } from '../../use-cases/interfaces/iRepositoryGateway';

export class RepositoryGateway implements iRepositoryGateway {
  // The journeys Aggregate is passed into this method to be persisted to the Business service DB for the other Acceptance microservices to use.
  persistAggregate(aggregate: Aggregate) {
    // SDK code to call DynamoDB and persist the journeys aggregate
  }
}
