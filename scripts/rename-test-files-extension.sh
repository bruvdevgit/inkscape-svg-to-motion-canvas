#!/bin/bash

# Find all files in the ../src directory (including subdirectories) ending with .test.ts
find src -type f -name "*.test.ts" | while read file; do
  # Construct new filename by replacing .test.ts with .test.mts
  new_file="${file%.test.ts}.test.mts"
  
  # Rename the file
  mv "$file" "$new_file"
  echo "Renamed: $file -> $new_file"
done
