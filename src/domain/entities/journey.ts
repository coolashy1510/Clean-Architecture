import { acceptanceWindow } from "./acceptanceWindow";
import { ccFlight } from "./ccFlight";
import { passenger } from "./passenger";

export class journey {
    acceptanceWindow: acceptanceWindow;
    ccCarrierCode:    string;
    ccFamilyName:     string;
    ccFlights:        ccFlight[];
    ccGivenName:      string;
    ccOpRloc:         string;
    id:               string;
    passengers:       passenger[];

    constructor(dapiresponse : any) {
        // Create base aggregate
    }

    isCCJourney():boolean {
        return true;
    }

    updateJourneyWithCCData(ccresponse: any):any {
        // update aggregate with CC response
        // For each journey aggregate, look at the flights in it(refer the dapi response) and 
        // compare against the cc flights response, having found a match, update the CC flight details on the aggregate
        // Similarly for each passenger. Check if it makes more sense to use journey-elements for comparison.
    }

    acceptJourney() {}

    cancelAcceptance() {}

    allJourneyElementsCheckedin() {}

    updateJourneyWithAcceptanceStatus() {}

    updateJourneyWithCancelAcceptanceStatus() {}


}
