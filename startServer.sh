#!/bin/bash
read -p "Enter your environment: " NODE_ENV

if [ "$NODE_ENV" = "production" ] || [ "$NODE_ENV" = "prod" ] 
then
    echo $NODE_ENV;
    exec yarn prod;
else 
    echo $NODE_ENV;
    exec yarn develop & yarn wait
fi