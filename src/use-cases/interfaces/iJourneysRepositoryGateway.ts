import { journey } from "../../domain/entities/journey"; 

export interface iJourneysRepositoryGateway {
    // The journeys Aggregate is passed into this method to be persisted to the Business service DB for the other Acceptance microservices to use.
    persistAggregate(journeys:journey[]);
} 