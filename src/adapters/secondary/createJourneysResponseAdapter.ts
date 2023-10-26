import { journey } from "../../domain/entities/journey";
import { createJourneysResponse } from "../../domain/entities/createJourneysResponse";

// creates API Gateway Response from the DAPI Response. The format of the body is documented on confluence.
export class createJourneyResponseAdapter {
    createJourneysResponse(journeys:journey[]):any {
        
    }
}