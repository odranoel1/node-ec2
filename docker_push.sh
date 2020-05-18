aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 182907940373.dkr.ecr.us-east-1.amazonaws.com
docker build -t $ECR_REPO_NAME .
docker tag $ECR_REPO_NAME:latest $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$ECR_REPO_NAME:latest
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$ECR_REPO_NAME:latest