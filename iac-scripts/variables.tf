############################################################
# General values
############################################################
variable region{
  description = "The region for the microservice"
  type        = string
}
variable bucket{
  description = "The terraform state bucket"
  type        = string
}
variable key{
  description = "Key for the terraform state bucket"
  type        = string
}
############################################################
# Lambda values
############################################################
variable filename{
  description = "Name of the deployment file for the Lambda"
  type        = string
}
variable function_name{
  description = "Lambda function name"
  type        = string
}
variable handler{
  description = "The name of the Lambda handler"
  type        = string
}
variable runtime{
  description = "Runtime to be used for the Lambda handler"
  type        = string
}
variable log_level{
  description = "log level to be used for the winston logging"
  type        = string
}
variable timeout{
  description =  "Lambda function timeout"
  type        = string
}
variable memory_size{
  description =  "Lambda function memory size"
  type        = string
}
variable ssm_parameter_id{
  description =  "SSM Parameter ID"
  type        = string
}
variable cache_expiration{
  description =  "SSM Cache expiration value"
  type        = string
}
############################################################
# IAM values
############################################################
variable role_name{
  description = "IAM Role Name"
  type        = string
}
############################################################
# API Gateway values
############################################################
variable api_name{
  description = "Name of the api gateway for the microservice"
  type        = string
}
variable protocol_type{
  description = "Protocol for the api gateway"
  type        = string
}
variable env{
  description = "The name of the deployment environment"
  type        = string
}
variable retention_in_days{
  description = "Cloudwatch logs retention period"
  type        = number
}
variable output_url{
  description = "The apigateway url"
  type        = string
}
variable max_age{
  description = "Apigateway CORS access control max-age"
  type        = number
}