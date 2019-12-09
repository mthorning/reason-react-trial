let str = React.string;

module Programme = {
  [@react.component]
  let make = () => {
    let url = ReasonReactRouter.useUrl();
    switch (url.hash) {
    | "/counter" => <Counter />
    | "/todo" => <Todo />
    | "/" => <h1> "Test"->str </h1>
    | _ => <h1> "Not Found"->str </h1>
    };
  };
};

[@react.component]
let make = () =>
  <>
    <a href="/#/counter"> "Counter"->str </a>
    <a href="/#/todo"> "Todo"->str </a>
    <Programme />
  </>;
