'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function str(prim) {
  return prim;
}

function AddItem(Props) {
  var addItem = Props.addItem;
  var match = React.useState((function () {
          return "";
        }));
  var setInputValue = match[1];
  var inputValue = match[0];
  var handleChange = function ($$event) {
    return Curry._1(setInputValue, $$event.target.value);
  };
  var handleClick = function (_event) {
    Curry._1(addItem, inputValue);
    return Curry._1(setInputValue, (function (param) {
                  return "";
                }));
  };
  return React.createElement(React.Fragment, undefined, React.createElement("input", {
                  value: inputValue,
                  onChange: handleChange
                }), React.createElement("button", {
                  onClick: handleClick
                }, "Add"));
}

var make = AddItem;

exports.str = str;
exports.make = make;
/* react Not a pure module */
