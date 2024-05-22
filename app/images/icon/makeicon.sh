#!/bin/bash

for size in 16 32 48 96 128 256; do
    convert -resize ${size}x${size} -colors 256 icon.bmp icon-${size}.bmp
done

convert $(for size in 16 32 48 96 128 256; do
    echo icon-${size}.bmp
done) icon.ico

# convert icon-16.bmp icon-32.bmp icon-48.bmp icon-96.bmp icon-128.bmp icon-256.bmp icon.ico
# convert -resize 16x16 -colors 256 icon.bmp icon-16.bmp
# convert -resize ${size}x${size} -colors 256 icon.bmp icon-${size}.bmp