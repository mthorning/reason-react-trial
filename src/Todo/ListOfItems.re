let str = React.string;

module ListItem = {
  [@react.component]
  let make = (~item, ~removeItem) => {
    let handleClick = _e => removeItem(item);
    <li key=item>
      item->str
      <button onClick=handleClick> "-"->str </button>
    </li>;
  };
};

[@react.component]
let make = (~items, ~removeItem) =>
  <ul>
    {
      if (List.length(items) > 0) {
        List.map(item => <ListItem item removeItem />, items)
        ->Array.of_list
        ->React.array;
      } else {
        ReasonReact.null;
      }
    }
  </ul>;
