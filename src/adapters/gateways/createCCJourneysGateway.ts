import {iCreateCCJourneysGateway} from "../../use-cases/interfaces/iCreateCCJourneysGateway";

export class createCCJourneysGateway implements iCreateCCJourneysGateway {
    // The configType is passed on to the method here, a lookup is done on the param store gateway and the corresponding 
    // connection details are used to call CC records API 
    retrieveCCPassengerRecords(configType:string, ccRecordsRequest:any):any {
        // Code to make a post call to the DAPI endpoint
    }
}