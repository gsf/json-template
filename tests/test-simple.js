var assert = require("assert"),
    Template = require("../lib/json-template").Template;

exports["test - Simple example"] = function() {
    assert.equal(Template('Hello {name}').expand({'name': 'world'}), 
            "Hello world");
};
exports.testComment = function() {
    var t = Template("Hello {# Comment} There");
    assert.equal(t.expand({}), "Hello There");
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

