exports["test-simple"] = require("./test-simple");
exports["test-substitutions"] = require("./test-substitutions");

if (module === require.main) {
  try {
    require("test").run(exports);
  } catch (err) {
    if (err.message === "Cannot find module 'test'") {
      // Assume node if "test" not found
      require("./node-test").run(exports);
    } else {
      throw err
    }
  }
}

