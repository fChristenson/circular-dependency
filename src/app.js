const { userService, logger } = require("./lib/services");

logger.info("my app has started");

userService.createUser("foo", "bar");
