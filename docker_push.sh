aws ecr get-login-password --region $AWS_DEFAULT_REGION | docker login --username AWS --password-stdin $AWS_ACCESS_KEY_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com