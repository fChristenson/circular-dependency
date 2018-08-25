const b = require("./b2");

console.log(b.hello("b"));
console.log("--------------------------");

module.exports.hello = name => `Hello ${name}`;
