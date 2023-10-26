import { acceptanceEligibility } from "./acceptanceEligibility";

export interface passengerFlight {
    acceptanceEligibility: acceptanceEligibility;
    checkinStatus:         string;
    id:                    string;
}