resource "aws_apigatewayv2_api" "olci_service_name_api" {
  name             = var.api_name
  protocol_type    = var.protocol_type
  cors_configuration {
    allow_origins  = ["*"]
    allow_methods  = ["POST"]
    allow_headers  = ["content-type","date"]
    expose_headers = ["content-type","date"]
    max_age        = var.max_age
  }
}

resource "aws_apigatewayv2_stage" "dev" {
  api_id      = aws_apigatewayv2_api.olci_service_name_api.id
  name        = var.env
  auto_deploy = true

  access_log_settings {
    destination_arn = aws_cloudwatch_log_group.service_name_api_gw.arn

    format = jsonencode({
      requestId               = "$context.requestId"
      sourceIp                = "$context.identity.sourceIp"
      requestTime             = "$context.requestTime"
      protocol                = "$context.protocol"
      httpMethod              = "$context.httpMethod"
      resourcePath            = "$context.resourcePath"
      routeKey                = "$context.routeKey"
      status                  = "$context.status"
      responseLength          = "$context.responseLength"
      integrationErrorMessage = "$context.integrationErrorMessage"
      }
    )
  }
}

resource "aws_apigatewayv2_integration" "olci_service_name_integration" {
  api_id             = aws_apigatewayv2_api.olci_service_name_api.id
  integration_uri    = aws_lambda_function.olci_service_name_lambda.invoke_arn
  integration_type   = "AWS_PROXY"
  integration_method = "POST"
}

resource "aws_apigatewayv2_route" "olci_service_name_route" {
  api_id    = aws_apigatewayv2_api.olci_service_name_api.id
  route_key = "POST /serviceRoute"
  target    = "integrations/${aws_apigatewayv2_integration.olci_service_name_integration.id}"
}

resource "aws_cloudwatch_log_group" "service_name_api_gw" {
  name              = "/aws/apigateway/${aws_apigatewayv2_api.olci_service_name_api.name}"
  retention_in_days = var.retention_in_days
}

resource "aws_lambda_permission" "service_name_api_gw" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.olci_service_name_lambda.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.olci_service_name_api.execution_arn}/*/*"

}

output "url" {
    value = aws_apigatewayv2_stage.dev.invoke_url
}

output "route" {
    value = split(" ", aws_apigatewayv2_route.olci_service_name_route.route_key)[1]
}