resource "aws_lambda_function" "olci_service_name_lambda" {
  filename         = var.filename
  function_name    = var.function_name
  source_code_hash = filebase64sha256(var.filename)
  role             = var.role_name
  timeout          = var.timeout
  memory_size      = var.memory_size
  handler          = var.handler
  runtime          = var.runtime
  environment {
    variables = {
      LOG_LEVEL              = var.log_level
      SSM_PARAMETER_STORE_ID = var.ssm_parameter_id
      ENRICHED_CACHE         = var.enriched_cache
      CACHE_EXPIRATION       = var.cache_expiration
    }
  }
}

resource "aws_lambda_function_url" "lambda_function_url" {
  function_name      = aws_lambda_function.olci_service_name_lambda.function_name
  authorization_type = "NONE"
  }