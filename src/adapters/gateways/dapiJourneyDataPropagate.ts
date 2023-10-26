import { iDAPIJourneysDataPropagate } from "../../use-cases/interfaces/iDAPIJourneysDataPropagate";

export class dapiJourneyDataPropagate implements iDAPIJourneysDataPropagate {
    // This method accepts the DAPI journeys response for DAPI bookings and adds it to the corresponding DAPI Data stream
    propagateDAPIJourneyData(dapiJourneys:any):any {
        // SDK code to add the DAPI response to the corresponding Kinesis Data Stream
    }
}