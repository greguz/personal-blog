#!/bin/bash

find content -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) -exec mogrify -strip -interlace Plane -quality 75 {} +

# find content: starts in the "content" directory
# -type f: only files
# -iname "*.jpg": case-insensitive match for .jpg or .jpeg
# -exec mogrify ... {}: runs mogrify on each file (modifies in-place)
# -strip: removes metadata
# -interlace Plane: makes it load progressively
# -quality 75: compresses
