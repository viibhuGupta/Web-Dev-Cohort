import { useState } from "react";

function Todo({ todo }) {
  return (
    <div>
      {
        // eslint-disable-next-line react/prop-types
        todo.map(function (todos, index) {
          return (
            <div key={index}>
              <h1>{todos.title}</h1>
              <p>{todos.description}</p>
            </div>
          );
        })
      }
    </div>
  );
}

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function titleHandler(e) {
    const value = e.target.value;
    console.log(value);
    setTitle(value);
  }

  function descriptionHandler(e) {
    const value = e.target.value;
    setDescription(value);
    console.log(value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={titleHandler}
        value={title}
      />
      <input
        type="text"
        placeholder="description"
        onChange={descriptionHandler}
        value={description}
      />
      <button>Add todo</button>
    </div>
  );
}

export default Todo;


<Todo todo={[
  {
    title:"Do Study ",
    description:"Are You doing it"
  },
  {
    title:"Do Study ",
    description:"Are You doing it"
  },
]}/>