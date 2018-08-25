const a = require("./a4");

setTimeout(() => {
  console.log(a.hello("a"));
  console.log("--------------------------");
}, 1000);

module.exports.hello = name => `Hello ${name}`;
