#!/bin/bash

if [ "$NODE_ENV" = "prod" ] 
then
    echo $NODE_ENV;
    exec electron .;
else 
    echo $NODE_ENV;
    exec yarn develop & yarn wait
fi