const sayHello = require("./index");

if (sayHello() === "Hello, World!") {
  console.log("Test passed!");
  process.exit(0);
} else {
  console.log("Test failed!");
  process.exit(1);
}