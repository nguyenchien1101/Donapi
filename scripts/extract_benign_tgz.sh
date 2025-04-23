#!/bin/bash
   RAW_DIR="../npm-cache/benign/raw"
   EXTRACTED_DIR="../npm-cache/benign/extracted"
   mkdir -p "$EXTRACTED_DIR"
   for tgz in "$RAW_DIR"/*.tgz; do
       if [ -f "$tgz" ]; then
           pkg_name=$(basename "$tgz" .tgz)
           echo "Đang giải nén $pkg_name..."
           tar -xzf "$tgz" -C "$EXTRACTED_DIR"
           mv "$EXTRACTED_DIR/package" "$EXTRACTED_DIR/$pkg_name"
       fi
   done
