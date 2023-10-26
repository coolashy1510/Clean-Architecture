############################################################
# General values
############################################################
bucket = "tst-ba-olci-services-state"
region = "eu-west-1"
key    = "service-name-state/terraform.tfstate"

############################################################
# Lambda values
############################################################
filename         = "service-name.zip"
function_name    = "tst-olci-service-name"
handler          = "dest/handler.servicehandler"
runtime          = "nodejs18.x"
log_level        = "debug"
timeout          = 300
memory_size      = 1024
ssm_parameter_id = "/olci/tst/serviceName/url"
cache_expiration = "24h"

############################################################
# IAM values
############################################################
role_name        = "arn:aws:iam::123190332587:role/tst-ba-olci-serviceRole1"

############################################################
# API Gateway values
############################################################
api_name          = "tst-olci-service-name-api"
protocol_type     = "HTTP"
env               = "tst"
retention_in_days = 7
output_url        = "aws_apigatewayv2_stage.tst.invoke_url"
max_age           = 3600