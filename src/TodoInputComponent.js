import React from "react";

const TodoInputComponent = (props) => {
  const [newTodo, setTodo] = React.useState("");
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button
        value="Add Todo"
        onClick={(event) =>
          props.onClickAddTodo({ title: newTodo, status: false })
        }
      >
        Add
      </button>
    </div>
  );
};
export default TodoInputComponent;
