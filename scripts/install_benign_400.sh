#!/bin/bash
   BENIGN_DIR="../npm-cache/benign"
   mkdir -p "$BENIGN_DIR"
   PACKAGES=(
       "lodash" "express" "react" "moment" "axios" "vue" "angular" "underscore"
       "webpack" "jest" "mocha" "chai" "bluebird" "async" "typescript" "eslint"
       "prettier" "grunt" "gulp" "karma" "sinon" "webpack-cli" "babel-loader"
       "node-fetch" "eslint-plugin-react" "prettier-cli" "jest-environment-jsdom"
       "mocha-parallel-tests" "sinon-chai" "chai-http" "superagent" "supertest"
       "jest-cli" "babel-preset-env" "eslint-config-airbnb" "prop-types"
       "react-dom" "redux" "react-redux" "d3" "jquery" "socket.io" "mongoose"
       "passport" "body-parser" "cors" "dotenv" "express-session" "jsonwebtoken"
       "bcrypt"
   )
   for pkg in "${PACKAGES[@]}"; do
       echo "Đang cài $pkg..."
       npm install "$pkg" --prefix "$BENIGN_DIR" --no-save 2>/dev/null
   done
