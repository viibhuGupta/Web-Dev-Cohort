import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

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
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function Button() {
  const setCount = useSetRecoilState(countAtom);
  const even = useRecoilValue(evenSelector);

  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrese
      </button>

      {even ? <span>Even </span> : null}
    </div>
  );
}

export default App;
