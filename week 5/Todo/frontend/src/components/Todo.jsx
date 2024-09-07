export function Todo({ todo }) {
  return (
    <div>
        {
            // eslint-disable-next-line react/prop-types
            todo.map((todos , index) => {
                return(
                    <div key={index}>
                        <h1>{todos.title}</h1>
                        <p>{todos.description}</p>
                        <button>{todos.completed == true  ?  "Completed"  : "Mark as Completed"}</button>
                    </div>
                )
            })
        }
    </div>
  );
}
