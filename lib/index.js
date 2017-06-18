"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.Hello = function (props) {
    return React.createElement("h1", null,
        "Hello from ",
        props.compiler,
        " and ",
        props.framework,
        "!");
};
