export interface createJourneysResponse {
    journeys: Journey[];
}

interface Journey {
    acceptanceEligibility: AcceptanceEligibility;
    journeyId:             string;
    passengerFlights:      PassengerFlight[];
}

interface AcceptanceEligibility {
    reasons: string[];
    status:  string;
}

interface PassengerFlight {
    acceptanceEligibility: AcceptanceEligibility;
    checkinStatus:         string;
    passengerFlightId:     string;
}