#!/bin/bash
read -p "Enter your environment: " NODE_ENV
echo $NODE_ENV
if [ "$NODE_ENV" = "prod" ] || [ "$NODE_ENV" = "production" ]
then
    exec electron .;
else 
    exec yarn develop & yarn wait
fi