'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function str(prim) {
  return prim;
}

function ListOfItems$ListItem(Props) {
  var item = Props.item;
  var removeItem = Props.removeItem;
  var handleClick = function (_e) {
    return Curry._1(removeItem, item);
  };
  return React.createElement("li", {
              key: item
            }, item, React.createElement("button", {
                  onClick: handleClick
                }, "-"));
}

var ListItem = {
  make: ListOfItems$ListItem
};

function ListOfItems(Props) {
  var items = Props.items;
  var removeItem = Props.removeItem;
  return React.createElement("ul", undefined, List.length(items) > 0 ? $$Array.of_list(List.map((function (item) {
                          return React.createElement(ListOfItems$ListItem, {
                                      item: item,
                                      removeItem: removeItem
                                    });
                        }), items)) : null);
}

var make = ListOfItems;

exports.str = str;
exports.ListItem = ListItem;
exports.make = make;
/* react Not a pure module */
