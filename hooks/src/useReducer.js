import "./App.css";
import { useReducer, useState } from "react";

const initial = { contador: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "incrementar":
      return { contador: state.contador + 1 };
    case "decrementar":
      return { contador: state.contador - 1 };
    case "set":
      return { contador: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initial);
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch({ type: "decrementar" })}>-</button>
      {state.contador}
      <button onClick={() => dispatch({ type: "incrementar" })}>+</button>
      <button onClick={() => dispatch({ type: "set", payload: value })}>
        SET
      </button>
    </div>
  );
}

export default App;
