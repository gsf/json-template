var assert = require("assert"),
    Template = require("../lib/json-template").Template;

exports.testSimpleData = function() {
    assert.equal(Template("Hello {name}, how are you").expand({'name': 'Andy'}), "Hello Andy, how are you");
};
exports.testExpandingInteger = function() {
    assert.equal(Template("There are {num} ways to do it").expand({'num': 5}), "There are 5 ways to do it");
};
exports.testSpace = function() {
    var t = Template('{.space}{.space}');
    assert.equal(t.expand({}), '  ');
};
exports.testWhitespace = function() {
    var t = Template('{.tab}{.tab}');
    assert.equal(t.expand({}), '\t\t');
};
exports.testLinebreak = function() {
    var t = Template('Line{.newline}');
    assert.equal(t.expand({}), 'Line\n');
};
exports.testOnlyDeclaration = function() {
    var t = Template('{# Comment}');
    assert.equal(t.expand({}), '');
};

