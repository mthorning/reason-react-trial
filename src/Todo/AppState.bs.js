'use strict';

var List = require("bs-platform/lib/js/list.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");

function reducer(state, action) {
  if (action.tag) {
    var itemToRemove = action[0];
    return {
            items: List.filter((function (item) {
                      return item !== itemToRemove;
                    }))(state.items)
          };
  } else {
    return {
            items: Pervasives.$at(state.items, /* :: */[
                  action[0],
                  /* [] */0
                ])
          };
  }
}

exports.reducer = reducer;
/* No side effect */
