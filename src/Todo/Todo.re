let str = React.string;

[@react.component]
let make = () => {
  let (state, dispatch) = React.useReducer(AppState.reducer, {items: []});

  <> <AddItem dispatch /> <ListOfItems dispatch items={state.items} /> </>;
};
