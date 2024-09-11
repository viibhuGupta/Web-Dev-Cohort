import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  function logSomething() {
    console.log("Hy i am coming");
  }
  return (
    <>
    <div>
    <ButtonComponents inputFunction={logSomething} />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
     
    </>
  );
}

// eslint-disable-next-line react/prop-types
const  ButtonComponents = ({ inputFunction }) => {
  console.log("render child")
  return (
    <>
    <div>
    <button onClick={inputFunction}>Button Clicked</button>

    </div>
    </>
  );
}

export default App;
