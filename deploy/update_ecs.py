from __future__ import print_function
import os
import sys
import json
import argparse
import boto3
from botocore.exceptions import ClientError

if __name__ == "__main__":
    main()

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('cluster_name', help="It contains the service to update")
    parser.add_argument('service_name', help="Its the service to be update(re-deployed)")
    parser.add_argument('desire_tasks', help="Number tasks will be running")
    args = parser.parse_args()

    if not update_service(args.cluster_name, args.service_name, int(args.desire_tasks))

def update_service(cluster, service, count):
    print("Cluster: {0}".format(cluster))
    print("Service: {0}".format(service))
    print("Task: {0}".format(count))
    try:
        # Create ECS client
        client = boto3.client('ecs',
            aws_access_key_id=os.getenv('AWS_ACCESS_KEY_ID'),
            aws_secret_access_key=os.getenv('AWS_SECRET_ACCESS_KEY'),
            region_name=os.getenv('AWS_DEFAULT_REGION'),
        )
        print("created successfully: {0}".format(client))
    except ClientError as err
        print("Failed to create ECS client: {0}".format(err))
        return False
    try:
        response = client.update_service(
            cluster=cluster,
            service=service,
            desiredCount=count
            forceNewDeployment=True
        )
        return response
    except ClientError as err
        print("Failed to update stack: {0}".format(err))
        return False