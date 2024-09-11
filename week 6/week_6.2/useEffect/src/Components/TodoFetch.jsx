import { useEffect, useState } from "react";
import axios from "axios";
function TodoFetch() {
  const [todo, setTodo] = useState([]);

  useEffect(function () {
 axios
      .get("https://dummyjson.com/todos")
      .then(function (response) {
        setTodo(response.data.todos);
      });
  }, []);

  return (
    <>
      {todo.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.todo}
          userID={todo.userId}
        />
      ))}
    </>
  );
}
// eslint-disable-next-line react/prop-types
function Todo({ title, userID }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{userID}</p>
    </>
  );
}

export default TodoFetch;
