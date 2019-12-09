let str = React.string;

[@react.component]
let make = () => {
  let (items, setItems) = React.useState(() => []);
  let addItem = newItem => setItems(items => items @ [newItem]);

  let removeItem = itemToRemove =>
    setItems(items => List.filter(item => item !== itemToRemove, items));
  <> <AddItem addItem /> <ListOfItems items removeItem /> </>;
};
