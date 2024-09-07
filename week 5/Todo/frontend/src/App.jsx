import { useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todo } from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:8080/todos").then(async function (res) {
    const json = await res.json();
    setTodos(json.todos);
  });
  return (
    <>
      <CreateTodo />
    <Todo todo={todos}/>
    </>
  );
}

export default App;



// <Todo
// todo={[
//   {
//     title: "Go to the gym",
//     description: "You need to do Exercises",
//     completed: false,
//   },
//   {
//     title: "Go to the gym2",
//     description: "You need to do Exercises1",
//     completed: true,
//   },
// ]}
// />
