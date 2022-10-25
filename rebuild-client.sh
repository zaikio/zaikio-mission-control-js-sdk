#!/usr/bin/env bash

set -e pipefail

swagger-codegen generate \
  -l javascript \
  -i https://mc.sandbox.zaikio.com/api/docs/api.yml \
  -o . \
  --additional-properties usePromises=true,useES6=true

jq '.main = "lib/index.js" | .scripts.build = "babel src -d lib"' package.json > package.json.tmp && mv package.json.tmp package.json
