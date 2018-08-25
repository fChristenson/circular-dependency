const { either } = require("./lib/utils/");
//const either = require("./lib/utils/either");

function node() {
  return process.env.NODE_ENV;
}

function browser() {
  return __ENV__;
}

const getMode = either(node, browser);

module.exports = {
  appName: "my app",
  mode: getMode(global && global.window),
  labels: {
    info: "INFO",
    debug: "DEBUG",
    warn: "WARN",
    error: "ERROR"
  },
  urls: {
    createUser: "http://localhost:3000/api/v1/users"
  }
};
