'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var Todo$ReasonReactExamples = require("../Todo/Todo.bs.js");
var Counter$ReasonReactExamples = require("../Counter/Counter.bs.js");

function str(prim) {
  return prim;
}

function App$Programme(Props) {
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  var match = url.hash;
  switch (match) {
    case "/" :
        return React.createElement("h1", undefined, "Test");
    case "/counter" :
        return React.createElement(Counter$ReasonReactExamples.make, { });
    case "/todo" :
        return React.createElement(Todo$ReasonReactExamples.make, { });
    default:
      return React.createElement("h1", undefined, "Not Found");
  }
}

var Programme = {
  make: App$Programme
};

function App(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement("a", {
                  href: "/#/counter"
                }, "Counter"), React.createElement("a", {
                  href: "/#/todo"
                }, "Todo"), React.createElement(App$Programme, { }));
}

var make = App;

exports.str = str;
exports.Programme = Programme;
exports.make = make;
/* react Not a pure module */
