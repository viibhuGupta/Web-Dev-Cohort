import { useState } from "react";

export function CreateTodo() {
  const [title, setTile] = useState("");
  const [description, setDescription] = useState("");
  function changeDes(e) {
    const value = e.target.value;
    console.log(value);
    setDescription(value);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={function (e) {
          const value = e.target.value;
          setTile(value);
        }}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={changeDes}
      />

      <button
        onClick={() => {
          fetch("http://localhost:8080/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
               "Content-Type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("Todo Added");
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
