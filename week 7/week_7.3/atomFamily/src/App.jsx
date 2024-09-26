  import { RecoilRoot, useRecoilValue } from "recoil";
  import {  todoAtomFamily } from "./atom";

  function App() {
    return (
      <>
      <RecoilRoot>
      <TodoApp id={1} />
      <TodoApp id={2} />
      <TodoApp id={4} />
      <TodoApp id={3} />
      </RecoilRoot>
        
      </> 
    );
  }

  // eslint-disable-next-line react/prop-types
  function TodoApp({id}) {
    const todoAtomState = useRecoilValue(todoAtomFamily(id));
    console.log(todoAtomState)
    return (
      <>
        <h1>{todoAtomState.title}</h1>
        <p>{todoAtomState.description}</p>
      </>
    );
  }

  export default App;
