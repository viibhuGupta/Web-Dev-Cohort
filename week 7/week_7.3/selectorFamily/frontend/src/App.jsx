import { RecoilRoot, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { todoAtomFamily } from "./atom";

function App() {
  return (
    <>
      <RecoilRoot>
        <TodoApp id={"66db4ca47a9fd2f8e2e09244"} />
        <TodoApp id={"66db4ca47a9fd2f8e2e09244"} />

        <TodoApp id={"66db4ca47a9fd2f8e2e09244"} />


        <TodoApp id={"66db4ca47a9fd2f8e2e09244"} />


        {/* <TodoApp id={2} /> */}
      </RecoilRoot>
    </>
  );
}

// eslint-disable-next-line react/prop-types
function TodoApp({ id }) {
  const todoAtomState = useRecoilValueLoadable(todoAtomFamily(id));
  console.log(todoAtomState);

  if (todoAtomState.state === "loading") {
    return <div>Loading....</div>
  }
  else if (todoAtomState.state === "hasValue"){
   return(
    <div className="">
       <h1>{todoAtomState.contents.title}</h1>
       <p>{todoAtomState.contents.description}</p>
    </div>
   )
  }
  
}

export default App;
