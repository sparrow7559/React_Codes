import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function MyComponent() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("Component Rendered");
    // console.log(inputRef);
  }, []);

  function handleNumber1() {
    // setNumber((n) => n + 1);
    // inputRef.current++;
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "green";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleNumber2() {
    // setNumber((n) => n + 1);
    // inputRef.current++;
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = "green";
    inputRef1.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleNumber3() {
    // setNumber((n) => n + 1);
    // inputRef.current++;
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor = "green";
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
  }

  return (
    <div>
      <button onClick={handleNumber1}>Click Me 1</button>
      <input ref={inputRef1} />
      <button onClick={handleNumber2}>Click Me 2</button>
      <input ref={inputRef2} />
      <button onClick={handleNumber3}>Click Me 3</button>
      <input ref={inputRef3} />
    </div>
  );
}

export default MyComponent;
