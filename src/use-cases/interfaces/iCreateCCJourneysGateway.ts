export interface iCreateCCJourneysGateway {
    // The configType is passed on to the method here, a lookup is done on the param store gateway and the corresponding 
    // connection details are used to call CC records API 
    retrieveCCPassengerRecords(configType:string, ccRecordsRequest:any):any;
}