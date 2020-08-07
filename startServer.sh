#!/bin/bash
read -p "Enter your environment: " NODE_ENV
echo $NODE_ENV
if [ "$NODE_ENV" = "prod" ] || [ "$NODE_ENV" = "production" ]
then
    echo $NODE_ENV;
    exec electron .;
else 
    echo $NODE_ENV;
    exec yarn develop & yarn wait
fi