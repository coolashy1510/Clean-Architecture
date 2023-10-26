import { passengerFlight } from "./passengerFlight";

export interface passenger {
    associatedInfantId: string;
    ccEticketNumber:    string;
    ccFamilyName:       string;
    ccGivenName:        string;
    id:                 string;
    passengerFlight: passengerFlight[];
    type:               string;
}