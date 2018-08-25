module.exports.hello = name => `Hello ${name}`;

const b = require("./b3");

console.log(b.hello("b"));
console.log("--------------------------");
