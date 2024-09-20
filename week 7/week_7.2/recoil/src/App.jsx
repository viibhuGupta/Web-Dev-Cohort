import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";


function App() {

  return (
    <>
    <RecoilRoot>
    <Count />

    </RecoilRoot>
     
    </>
  );
}

function Count() {
  return (
    <div>
      
      <Counter />
      <Button />
    </div>
  );
}

function Counter() {
  const count = useRecoilValue(countAtom)
  return <div>{count}</div>;
}

function Button() {
  const [count , setCount] = useRecoilState(countAtom)
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrese
      </button>
    </div>
  );
}

export default App;
