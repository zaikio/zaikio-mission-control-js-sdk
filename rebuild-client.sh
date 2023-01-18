#!/usr/bin/env bash

set -e pipefail

# Check dependencies
for name in prettier swagger-codegen jq npm
do
  if ! command -v $name &> /dev/null
  then
      echo "'$name' could not be found on your system. Please install it and try again."
      exit 1
  fi
done

export JS_POST_PROCESS_FILE="$(which prettier) -w"

rm -rf "$(pwd)/src"
rm -rf "$(pwd)/test"

MC_VERSION="0.0.1"

swagger-codegen generate \
  -l javascript \
  -i "https://mc.zaikio.com/api/docs/api.yml" \
  -o . \
  --additional-properties usePromises=true,useES6=true

jq '.main = "dist/index.js" | .scripts.prebuild = "rm -rf dist" | .scripts.build = "babel src -d dist" | .dependencies.superagent = "^8.0.3" | .devDependencies.mocha = "^10.1.0" | .devDependencies.sinon = "^14.0.1" | .version = "0.0.1"' package.json > package.json.tmp && mv package.json.tmp package.json

npm install
npm run build

