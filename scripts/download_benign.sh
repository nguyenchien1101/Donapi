#!/bin/bash
BENIGN_DIR="../npm-cache/benign"
mkdir -p "$BENIGN_DIR"
PACKAGES=$(curl -s 'https://registry.npmjs.org/-/v1/search?text=keywords:javascript&size=1000' | jq -r '.objects[].package.name' | head -n 1000)
for pkg in $PACKAGES; do
    echo "Đang cài $pkg..."
    npm install "$pkg" --prefix "$BENIGN_DIR" --no-save 2>/dev/null
done
