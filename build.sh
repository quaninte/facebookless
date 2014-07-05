#!/bin/sh
rm -rf build
rm -f facebookless.zip
mkdir build
rsync -av --exclude='build' --exclude='.idea' --exclude='.git*' --exclude='build.sh' --exclude='facebookless.zip' ./ ./build/

cp ./key.pem ./build/key.pem
zip -r facebookless.zip build