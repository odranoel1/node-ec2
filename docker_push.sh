aws --region ${AWS_DEFAULT_REGION} ecr get-login-password \
    | docker login \
        --password-stdin \
        --username AWS \
        "${AWS_ACCESS_KEY_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com"

docker build -t $ECR_REPO_NAME .
docker tag $ECR_REPO_NAME:latest $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$ECR_REPO_NAME:latest
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$ECR_REPO_NAME:latest