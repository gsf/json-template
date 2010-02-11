exports["test-simple"] = require("./test-simple");
exports["test-substitutions"] = require("./test-substitutions");

if (module === require.main) {
    require("test").run(exports);
}

