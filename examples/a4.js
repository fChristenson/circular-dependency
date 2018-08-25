const b = require("./b4");

setTimeout(() => {
  console.log(b.hello("b"));
  console.log("--------------------------");
}, 1000);

module.exports.hello = name => `Hello ${name}`;
