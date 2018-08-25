const { logger } = require("../");

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
