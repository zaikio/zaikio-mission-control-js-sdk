#!/usr/bin/env bash

set -e pipefail

export JS_POST_PROCESS_FILE="$(which prettier) -w"

rm -rf "$(pwd)/src"
rm -rf "$(pwd)/test"

swagger-codegen generate \
  -l javascript \
  -i "https://mc.zaikio.com/api/docs/api.yml" \
  -o . \
  --additional-properties usePromises=true,useES6=true

jq '.main = "dist/index.js" | .scripts.prebuild = "rm -rf dist" | .scripts.build = "babel src -d dist" | .dependencies.superagent = "^8.0.3" | .devDependencies.mocha = "^10.1.0" | .devDependencies.sinon = "^14.0.1"' package.json > package.json.tmp && mv package.json.tmp package.json

npm install
npm run build

