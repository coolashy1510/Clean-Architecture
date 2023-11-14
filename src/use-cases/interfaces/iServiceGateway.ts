export interface iServiceGateway {
  // The config type could either be DAPI/CC and the corresponding connection details would be retrieved from the param store
  proxyCallToDapi(request: any): any;
}
