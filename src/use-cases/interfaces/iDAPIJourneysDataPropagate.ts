export interface iDAPIJourneysDataPropagate {
    // This method accepts the DAPI journeys response for DAPI bookings and adds it to the corresponding DAPI Data stream
    propagateDAPIJourneyData(dapiJourneys:any):any;
}