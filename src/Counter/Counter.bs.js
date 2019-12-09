'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function Counter(Props) {
  var match = React.useState((function () {
          return 0;
        }));
  var setCount = match[1];
  var handleClick = function (_e) {
    return Curry._1(setCount, (function (prevCount) {
                  return prevCount + 1 | 0;
                }));
  };
  return React.createElement(React.Fragment, undefined, React.createElement("button", {
                  onClick: handleClick
                }, "Increment"), React.createElement("p", undefined, "Count = " + (String(match[0]) + "")));
}

var make = Counter;

exports.make = make;
/* react Not a pure module */
