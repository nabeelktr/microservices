#!/bin/bash

if ! npx proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=proto/ src/config/protos/*.proto; then
    echo "Error: proto-loader-gen-types failed"
    exit 1
fi
