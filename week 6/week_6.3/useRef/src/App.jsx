import { useRef } from "react";
import { useEffect } from "react";

function App() {
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      console.log(divRef);
      divRef.current.innerHTML = 10;
    }, 5000);
  }, []);
  const salary = 20000;

  return (
    <>
      <div ref={divRef}>{salary}</div>
    </>
  );
}

export default App;
