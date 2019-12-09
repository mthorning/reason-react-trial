[@react.component]
let make = () => {
  let (count, setCount) = React.useState(() => 0);

  let handleClick = _e => setCount(prevCount => prevCount + 1);

  <>
    <button onClick=handleClick> {React.string("Increment")} </button>
    <p> {j|Count = $count|j}->React.string </p>
  </>;
};
