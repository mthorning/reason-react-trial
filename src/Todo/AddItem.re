let str = React.string;

[@react.component]
let make = (~dispatch) => {
  let (inputValue, setInputValue) = React.useState(() => "");
  let handleChange = event =>
    setInputValue(ReactEvent.Form.target(event)##value);

  let handleClick = _event => {
    dispatch(AppState.AddItem(inputValue));
    setInputValue(_ => "");
  };

  <>
    <input value=inputValue onChange=handleChange />
    <button onClick=handleClick> "Add"->str </button>
  </>;
};
