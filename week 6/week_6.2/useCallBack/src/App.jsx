import { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

// use Callback 
  const inputFunction = useCallback(function () {
    console.log("Hy there");
  }, []);



  return (
    <>
      <div>
        <ButtonComponents inputFunction={inputFunction} />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

// eslint-disable-next-line react/prop-types
const ButtonComponents = ({ inputFunction }) => {
  console.log("render child");
  return (
    <>
      <div>
        <button onClick={inputFunction}>Button Clicked</button>
      </div>
    </>
  );
};

export default App;
