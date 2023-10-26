import { iJourneysRepositoryGateway } from "../../use-cases/interfaces/iJourneysRepositoryGateway";
import { journey } from "../../domain/entities/journey";

export class journeyRepositoryGateway implements iJourneysRepositoryGateway {
    // The journeys Aggregate is passed into this method to be persisted to the Business service DB for the other Acceptance microservices to use.
    persistAggregate(journeys:journey[]){
        // SDK code to call DynamoDB and persist the journeys aggregate
    }
}