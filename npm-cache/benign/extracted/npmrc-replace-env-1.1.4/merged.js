"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  writeNpmrc: () => writeNpmrc
});
module.exports = __toCommonJS(src_exports);
var import_dotenv_flow = __toESM(require("dotenv-flow"));

// src/utils/write-npmrc.util.ts
var file2 = __toESM(require("fs"));

// src/constants/defaults.const.ts
var DEFAULT_NPMRC_FILE = ".npmrc";
var DEFAULT_CONFIG_FILE = ".npmrc.config";
var DEFAULT_ENV_PREFIX = "NPMRC_";

// src/utils/get-env-value.util.ts
function getEnvValue(env) {
  const value = process.env[env];
  if (typeof value !== "string" || !value) {
    throw new Error(
      `Environment variable ${env} is not defined. Please define it in your .env file or pass it as an environment variable.`
    );
  }
  return value;
}

// src/utils/generate-npmrc.util.ts
function generateNpmrc(config, envs) {
  let npmrc = config;
  envs.forEach((env) => {
    npmrc = npmrc.replace(new RegExp(env, "g"), getEnvValue(env));
  });
  return npmrc;
}

// src/utils/get-env-from-config.util.ts
function getEnvKeysFromConfig(config, envPrefix = "") {
  return Array.from(
    new Set(
      config.match(new RegExp(`(?<=\\=)${envPrefix}[A-Z0-9_]+`, "g")) || []
    )
  );
}

// src/utils/read-config.util.ts
var file = __toESM(require("fs"));
function readConfig(configFilePath) {
  try {
    return file.readFileSync(configFilePath).toString();
  } catch (err) {
    throw new Error(
      `Config file not found: ${configFilePath}. Please create a file named ${configFilePath}`
    );
  }
}

// src/utils/transform-env-prefix.util.ts
function transformEnvPrefix(envPrefix) {
  return envPrefix === null ? "" : envPrefix || DEFAULT_ENV_PREFIX;
}

// src/utils/write-npmrc.util.ts
function writeNpmrc({ envPrefix }) {
  const config = readConfig(DEFAULT_CONFIG_FILE);
  const envs = getEnvKeysFromConfig(config, transformEnvPrefix(envPrefix));
  const npmrc = generateNpmrc(config, envs);
  const lastModified = `# last modified: ${(/* @__PURE__ */ new Date()).toISOString()}

`;
  try {
    file2.writeFileSync(DEFAULT_NPMRC_FILE, lastModified + npmrc);
  } catch (error) {
    throw new Error(
      `Error writing to ${DEFAULT_NPMRC_FILE} file: ${error.message ?? error}`
    );
  }
}

// src/index.ts
import_dotenv_flow.default.config({
  silent: true
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  writeNpmrc
});

