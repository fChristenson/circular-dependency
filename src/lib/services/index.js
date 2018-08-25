const config = require("../../config/config");
const UserService = require("./userService/UserService");
const LoggingService = require("./loggingService/LoggingService");

// fake
const serverStorage = {
  saveUser: () => {}
};

const browserStorage = {
  saveUser: data => {
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    return fetch(config.urls.saveUser, request);
  }
};

const storage = config.mode === "browser" ? browserStorage : serverStorage;

const userService = new UserService(storage);
const logger = new LoggingService(config.appName);

module.exports = {
  userService,
  logger
};
