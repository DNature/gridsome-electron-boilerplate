#!/bin/bash

if [ "$NODE_ENV" = "prod" ] ; then
    exec wait-on http://localhost:8081 && electron .
else 
    exec yarn develop
    exec wait-on http://localhost:8080 && electron .
fi