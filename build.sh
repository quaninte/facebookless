#!/bin/sh
rm -rf build
mkdir build
rsync -av --exclude='build' --exclude='.idea' --exclude='.git*' --exclude='build.sh' ./ ./build/

cp ./key.pem ./build/key.pem
zip -r facebookless.zip build