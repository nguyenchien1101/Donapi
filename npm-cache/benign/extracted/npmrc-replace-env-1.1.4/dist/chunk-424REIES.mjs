// src/index.ts
import dotenvFlow from "dotenv-flow";

// src/utils/write-npmrc.util.ts
import * as file2 from "fs";

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
import * as file from "fs";
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
dotenvFlow.config({
  silent: true
});

export {
  DEFAULT_ENV_PREFIX,
  writeNpmrc
};
