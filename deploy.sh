#!/bin/bash

set -e -x

rm -rf dist

mkdir -p dist

npm run build

cp -r index.html index.html sources bundle.js CNAME dist

./node_modules/.bin/gh-pages -d dist

rm -rf dist
