import { useRef } from "react";

const App = () => {
  const ref = useRef();
  const inputRef = useRef();

  const click = () => {
    console.log(ref.current.clientHeight);
    ref.current.innerHTML = "Pablito feliz";
  };

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <div onClick={click} ref={ref}>
        click
      </div>
      <button onClick={focus}>Focus</button>
    </div>
  );
};

export default App;
