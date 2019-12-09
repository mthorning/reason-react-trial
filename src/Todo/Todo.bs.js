'use strict';

var React = require("react");
var AddItem$ReasonReactExamples = require("./AddItem.bs.js");
var AppState$ReasonReactExamples = require("./AppState.bs.js");
var ListOfItems$ReasonReactExamples = require("./ListOfItems.bs.js");

function str(prim) {
  return prim;
}

function Todo(Props) {
  var match = React.useReducer(AppState$ReasonReactExamples.reducer, {
        items: /* [] */0
      });
  var dispatch = match[1];
  return React.createElement(React.Fragment, undefined, React.createElement(AddItem$ReasonReactExamples.make, {
                  dispatch: dispatch
                }), React.createElement(ListOfItems$ReasonReactExamples.make, {
                  items: match[0].items,
                  dispatch: dispatch
                }));
}

var make = Todo;

exports.str = str;
exports.make = make;
/* react Not a pure module */
