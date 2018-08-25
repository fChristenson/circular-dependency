const a = require("./a2");

console.log(a.hello("a"));
console.log("--------------------------");

module.exports.hello = name => `Hello ${name}`;
