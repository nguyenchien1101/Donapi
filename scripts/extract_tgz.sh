#!/bin/bash

RAW_DIR="../npm-cache/malware/raw"
EXTRACTED_DIR="../npm-cache/malware/extracted"

mkdir -p "$RAW_DIR" "$EXTRACTED_DIR"

for tgz_file in "$RAW_DIR"/*.tgz; do
    if [ -f "$tgz_file" ]; then
        base_name=$(basename "$tgz_file" .tgz)
        dest_dir="$EXTRACTED_DIR/$base_name"
        mkdir -p "$dest_dir"
        tar -xzf "$tgz_file" -C "$dest_dir" --strip-components=1
        echo "Extracted $tgz_file to $dest_dir"
    fi
done
