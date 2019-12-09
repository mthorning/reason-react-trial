'use strict';

var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var AddItem$ReasonReactExamples = require("./AddItem.bs.js");
var ListOfItems$ReasonReactExamples = require("./ListOfItems.bs.js");

function str(prim) {
  return prim;
}

function Todo(Props) {
  var match = React.useState((function () {
          return /* [] */0;
        }));
  var setItems = match[1];
  var addItem = function (newItem) {
    return Curry._1(setItems, (function (items) {
                  return Pervasives.$at(items, /* :: */[
                              newItem,
                              /* [] */0
                            ]);
                }));
  };
  var removeItem = function (itemToRemove) {
    return Curry._1(setItems, (function (items) {
                  return List.filter((function (item) {
                                  return item !== itemToRemove;
                                }))(items);
                }));
  };
  return React.createElement(React.Fragment, undefined, React.createElement(AddItem$ReasonReactExamples.make, {
                  addItem: addItem
                }), React.createElement(ListOfItems$ReasonReactExamples.make, {
                  items: match[0],
                  removeItem: removeItem
                }));
}

var make = Todo;

exports.str = str;
exports.make = make;
/* react Not a pure module */
