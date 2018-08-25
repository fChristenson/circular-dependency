const { logger } = require("./");
const config = require("../../config");
/*
const LogginService = require("./LoggingService");
const logger = new LogginService(config.appName);
*/
class UserService {
  constructor(storage) {
    this.storage = storage;
    this.createUser = this.createUser.bind(this);
  }

  createUser(firstName, lastName) {
    logger.debug(`Creating user ${firstName} ${lastName}`);
    return this.storage.saveUser({ firstName, lastName });
  }
}

module.exports = UserService;
