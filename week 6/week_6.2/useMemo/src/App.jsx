import { useEffect, useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [finalSum, setFinalSum] = useState(0);

  // const num = parseInt(inputValue, 10);
  // let sum = 0;

  // if (!isNaN(num) && num > 0) {
  //   for (let index = 1; index <= inputValue; index++) {
  //     sum += index;
  //   }
  // }

  useEffect(() => {
    let finalCount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalCount = finalCount + i;
    }
    setFinalSum(finalCount);
  }, [inputValue]);

  // const finalCount = useMemo( ()=> {
  //   let finalCount = 0;
  //   for(let i = 1 ; i <= inputValue ;i++){
  //     finalCount += i;
  //   }
  //   return finalCount;
  // }, [inputValue])

  function takeInputValue(e) {
    const value = e.target.value;
    console.log(value);
    setInputValue(value);
  }

  function countIncrease() {
    setCount(count + 1);
  }
  return (
    <>
      <input
        onChange={takeInputValue}
        value={inputValue}
        type="text"
        placeholder="enter a digits"
      />
      <div className="">sum ={finalSum}</div>
      <button onClick={countIncrease}>count ({count})</button>
    </>
  );
}

export default App;
