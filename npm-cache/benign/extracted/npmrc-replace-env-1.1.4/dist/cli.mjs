#!/usr/bin/env node
import {
  DEFAULT_ENV_PREFIX,
  writeNpmrc
} from "./chunk-424REIES.mjs";

// src/cli.ts
import yargs from "yargs";
var args = yargs(process.argv.slice(2)).option("prefix", {
  alias: "p",
  description: "Custom environment variable prefix",
  string: true,
  default: DEFAULT_ENV_PREFIX
}).option("without-prefix", {
  alias: "w",
  description: "Do not use any prefix for environment variables",
  boolean: true,
  default: false
}).help().alias("help", "h").parseSync();
writeNpmrc({
  envPrefix: args.withoutPrefix ? null : args.prefix
});
