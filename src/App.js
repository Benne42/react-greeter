import React from "react";

export default function Greeter(props) {
  // create and initialize React state (<==> model)
  //     changes to state via setter function ==> component function called / rendering, UI updated
  const [greeting, setGreeting] = React.useState("");

  // callback function
  function handleGreetClick() {
    alert(`Hello, ${greeting}!`);
  }

  // define variables
  const charsRemaining = props.maxLength - greeting.length;

  const greetingInvalid = greeting.length === 0 || charsRemaining < 0;

  // returning the UI described in JSX (declarative UI)
  //     compiled to JavaScript at build time
  //     using functions and variables (state, properties)
  return (
    <div>
      Greeting:
      <input value={greeting} onChange={e => setGreeting(e.target.value)} />
      <span>
        {charsRemaining}|{greeting.length}|{props.maxLength}
      </span>
      <button disabled={greetingInvalid} onClick={handleGreetClick}>
        Greet
      </button>
    </div>
  );
}
