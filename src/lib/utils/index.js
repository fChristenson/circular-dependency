const { labels, mode } = require("../../config/config");
const either = require("./either");

function logInfo(text) {
  console.info(getDate(), labels.info, text);
}

function logDebug(text) {
  if (mode === "browser") {
    console.log(getDate(), labels.debug, text);
  } else {
    console.debug(getDate(), labels.debug, text);
  }
}

function logWarning(text) {
  console.warn(getDate(), labels.warn, text);
}

function logError(text) {
  console.error(getDate(), labels.error, text);
}

function getDate() {
  return new Date().toISOString();
}

module.exports = {
  either,
  logInfo,
  logDebug,
  logWarning,
  logError,
  getDate
};
