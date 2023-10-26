import  { createDAPIJourneysGateway} from "../adapters/gateways/createDAPIJourneysGateway";
import  { dapiJourneyDataPropagate } from "../adapters/gateways/dapiJourneyDataPropagate";
import {journey} from "../domain/entities/journey";
import  { createCCJourneysGateway} from "../adapters/gateways/createCCJourneysGateway";
import { ccJourneyDataPropagate } from "../adapters/gateways/ccJourneysDataPropagate";
import { journeyRepositoryGateway } from "../adapters/gateways/journeyRepositoryGateway";
import { createJourneyResponseAdapter } from "../adapters/secondary/createJourneysResponseAdapter";
import { createCCRequestAdapter } from "../adapters/primary/createCCRequestAdapter";
import { createDapiRequestAdapter } from "../adapters/primary/createDapiRequestAdapter";

export class createJourneysUseCase {

    createJourneys(event:any):any {
        // 1.) Call DAPI 
        let dapigw:createDAPIJourneysGateway = new createDAPIJourneysGateway();
        let dapiReqAdapter:createDapiRequestAdapter = new createDapiRequestAdapter();
        let dapiResponse = dapigw.retrieveDAPIJourneys("dapi", dapiReqAdapter.createDAPIRequest(event));
        
        // 2.) Propagate DAPI Data
        let dapiPropagate:dapiJourneyDataPropagate = new dapiJourneyDataPropagate();
        dapiPropagate.propagateDAPIJourneyData(dapiResponse);

        //3.) Create Journey Aggregt
        let journeys:any = new journey(dapiResponse);

        // 4.) If Journey.isCCJourney() - call journeyGateway and get CC Response
        let isCCJourney:boolean = journeys.isCCJourney();
        let ccGw = new createCCJourneysGateway();
        let ccResponse = null;
        if(isCCJourney) {
            let ccReqAdapter:createCCRequestAdapter = new createCCRequestAdapter();
            ccResponse = ccGw.retrieveCCPassengerRecords("cc", ccReqAdapter.createCCRequest(event, dapiResponse));
        }

        // 5.) Propagate CC Data
        let ccPropagate:ccJourneyDataPropagate = new ccJourneyDataPropagate();

        // 6.) Update Journey Aggregate with CC Response
        let updatedJourneys = journeys.updateJourneyWithCCData(ccResponse);

        // 7.) Call journeyRepository and Persist Aggregate
        let repoGateway:journeyRepositoryGateway = new journeyRepositoryGateway();
        repoGateway.persistAggregate(journeys);

        // 8.) Call create-journey-response-adapter and return a response to the handler */
        let cjResponseAdapter:createJourneyResponseAdapter = new createJourneyResponseAdapter();
        cjResponseAdapter.createJourneysResponse(journeys);
    }
}


