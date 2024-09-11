import { useEffect, useState } from "react";
import axios from "axios";

function TodoIDFetch() {
  const [todoID, setTodoID] = useState("");

  return (
    <>
     <div  style={{ display:"flex", gap: "10px" }}>
     <button
        onClick={function () {
          setTodoID(1);
        }}
      >
        1
      </button>
      <button
        onClick={function () {
          setTodoID(2);
        }}
      >
        2
      </button>
      <button
        onClick={function () {
          setTodoID(3);
        }}
      >
        3
      </button>
      <button
        onClick={function () {
          setTodoID(4);
        }}
      >
        4
      </button>
     </div>
      <Todo id={todoID} />
    </>
  );
}

// eslint-disable-next-line react/prop-types
function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(
    function () {
      setTimeout(function () {
        axios.get(`https://dummyjson.com/todos/${id}`).then((response) => {
          setTodo(response.data);
        });
      }, 2000);
    },
    [id]
  );
  return (
    <>
      <div>id:{id}</div>

      <div style={{ gap: "10px" }}>
        <h1>ID = {todo.id}</h1>
       <div className="">
       <h1>{todo.todo}</h1>
       <p>{todo.userId}</p>
       </div>
        <div></div>
      </div>
    </>
  );
}
export default TodoIDFetch;
