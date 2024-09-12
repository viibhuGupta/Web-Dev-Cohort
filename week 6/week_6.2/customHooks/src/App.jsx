import { useState } from "react";
// coustom Hook becase we cant use state varible in a normal function we can only uuse state varibales in components 
function useIncrease() {
  const [count, setCount] = useState(0)
  function increase() {
    setCount(count+1);
  }
  return {increase , count} ;
}
function App() {
const {increase , count} = useIncrease();
  return (
    <>
      

        <button onClick={increase}>
          count is {count}
        </button>
      
    </>
  )
}

export default App
