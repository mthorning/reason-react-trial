let str = React.string;

module ListItem = {
  [@react.component]
  let make = (~item, ~dispatch) => {
    let handleClick = _e => dispatch(AppState.RemoveItem(item));
    <li key=item>
      item->str
      <button onClick=handleClick> "-"->str </button>
    </li>;
  };
};

[@react.component]
let make = (~items, ~dispatch) => {
  let itemList =
    List.map(item => <ListItem item dispatch />, items)
    ->Array.of_list
    ->React.array;

  if (List.length(items) > 0) {
    <ul> itemList </ul>;
  } else {
    ReasonReact.null;
  };
};
