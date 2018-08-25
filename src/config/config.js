const { either } = require("../lib/utils");
const appName = require("./appName");
const { logger } = require("../lib/services");

function node() {
  logger.debug(`Running in ${process.env.NODE_ENV}`);
  return process.env.NODE_ENV;
}

function browser() {
  logger.debug(`Running in ${__ENV__}`);
  return __ENV__;
}

const getMode = either(node, browser);

module.exports = {
  appName,
  mode: getMode(global && global.window),
  labels: {
    info: "INFO",
    debug: "DEBUG",
    warn: "WARN",
    error: "ERROR"
  },
  urls: {
    saveUser: "http://localhost:3000/api/v1/users"
  }
};
