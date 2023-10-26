import { createJourneysUseCase } from "../use-cases/create-journeys-use-case";


// 

export const handleEvent = async (event: any, context: any): Promise<any> => {
    // 1. makes a call to the use-case and passes input api gateway request body
    let useCase:createJourneysUseCase = new createJourneysUseCase();
    let response:any = useCase.createJourneys(event);

    // 2. handler also takes output of the use case and creates the api gateway response via the presenter/sec adapter
    // create and return api gateway response and error handling if any
  };