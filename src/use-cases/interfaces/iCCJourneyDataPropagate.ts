export interface iCCJourneyDataPropagate {
    // This method accepts the CC passenger-records response for CC bookings and adds it to the corresponding CC Data stream
    propagateCCJourneyData(ccPassengerRecords:any):any;
}