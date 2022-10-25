#!/usr/bin/env bash

set -e pipefail

swagger-codegen generate \
  -l javascript \
  -i https://mc.sandbox.zaikio.com/api/docs/api.yml \
  -o . \
  --additional-properties usePromises=true,useES6=true

jq '.main = "lib/index.js" | .scripts.build = "babel src -d lib" | .dependencies.superagent = "^8.0.3" | .devDependencies.mocha = "^10.1.0" | .devDependencies.sinon = "^14.0.1"' package.json > package.json.tmp && mv package.json.tmp package.json
