############################################################
# General values
############################################################
bucket = "dev-ba-olci-services-state"
region = "eu-west-1"
key    = "service-name-state/terraform.tfstate"

############################################################
# Lambda values
############################################################
filename         = "service-name.zip"
function_name    = "dev-olci-service-name"
handler          = "dest/handler.handlerName"
runtime          = "nodejs18.x"
log_level        = "debug"
timeout          = 300
memory_size      = 1024
ssm_parameter_id = "/olci/dev/serviceName/url"
cache_expiration = "24h"

############################################################
# IAM values
############################################################
role_name        = "arn:aws:iam::123190332587:role/dev-ba-olci-serviceRole1"

############################################################
# API Gateway values
############################################################
api_name          = "dev-olci-service-name-api"
protocol_type     = "HTTP"
env               = "dev"
retention_in_days = 7
output_url        = "aws_apigatewayv2_stage.dev.invoke_url"
max_age           = 3600