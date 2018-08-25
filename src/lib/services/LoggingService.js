const { logInfo, logDebug, logWarning, logError } = require("../utils");
const ErrorTracking = require("../api/ErrorTracking");

class LoggingService {
  constructor(label) {
    this.label = label;

    this.info = this.info.bind(this);
    this.debug = this.debug.bind(this);
    this.warning = this.warning.bind(this);
    this.error = this.error.bind(this);
  }

  info(text) {
    logInfo(text);
  }

  debug(text) {
    logDebug(text);
  }

  warning(text) {
    logWarning(text);
  }

  error(text) {
    logError(text);
    ErrorTracking.captureError(new Error(`${this.label} - ${text}`));
  }
}

module.exports = LoggingService;
