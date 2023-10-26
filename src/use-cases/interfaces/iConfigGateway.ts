interface iConfigGateway {
    // The config type could either be DAPI/CC and the corresponding connection details would be retrieved from the param store
     getConnectionConfig(configType:string):any;

     // The config type could either be DAPI/CC and the corresponding Kinesis Data Stream details would be retrieved from the param store
     getKinesisConfig(configType:string):any;
}