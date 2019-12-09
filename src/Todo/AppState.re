type action =
  | AddItem(string)
  | RemoveItem(string);

type state = {items: list(string)};

let reducer = (state, action) =>
  switch (action) {
  | AddItem(newItem) => {items: state.items @ [newItem]}
  | RemoveItem(itemToRemove) => {
      items: List.filter(item => item !== itemToRemove, state.items),
    }
  };
