import { iCCJourneyDataPropagate } from "../../use-cases/interfaces/iCCJourneyDataPropagate";

export class ccJourneyDataPropagate implements iCCJourneyDataPropagate {
    // This method accepts the CC passenger-records response for CC bookings and adds it to the corresponding CC Data stream
    propagateCCJourneyData(ccPassengerRecords:any):any {
        // SDK code to add the CC response to the corresponding Kinesis Data Stream
    }
}