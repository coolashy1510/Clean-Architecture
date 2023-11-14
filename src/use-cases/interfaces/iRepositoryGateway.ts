import { Aggregate } from '../../domain/entities/aggregate';

export interface iRepositoryGateway {
  // The journeys Aggregate is passed into this method to be persisted to the Business service DB for the other Acceptance microservices to use.
  persistAggregate(aggregate: Aggregate): any;
}
