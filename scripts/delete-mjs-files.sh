#!/bin/bash

# Find all files in the ../src directory (including subdirectories) ending with .mts
find src -type f -name "*.mts" | while read file; do
  # delete the file
  rm "$file"
  echo "Deleted: $file"
done
