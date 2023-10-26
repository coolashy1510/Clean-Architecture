export interface iCreateDAPIJourneysGateway {
    // The configType is passed on to the method here, a lookup is done on the param store gateway and the corresponding 
    // connection details are used to call DAPI journeys API 
    retrieveDAPIJourneys(configType:string, dapiJourneysRequest:any):any;
}