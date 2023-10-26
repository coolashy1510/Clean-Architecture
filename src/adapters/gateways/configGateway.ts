class configGateway implements iConfigGateway {
    // The config type could either be DAPI/CC and the corresponding connection details would be retrieved from the param store
    getConnectionConfig(configType:string):any {
        // SDK code for calling the param store based on the input config type and returning the connection details to the journey Gateway
    }

    // The config type could either be DAPI/CC and the corresponding Kinesis Data Stream details would be retrieved from the param store
    getKinesisConfig(configType:string):any {
        // SDK code for calling the param store based on the input config type and returning the Kinesis stream details to the Data Propagate gateway
    }
}