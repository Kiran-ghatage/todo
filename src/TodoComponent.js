import React from "react";

const TodoComponent = (props) => {
  function Checkbox() {
    const [checked, setChecked] = React.useState(false);

    return (
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    );
  }

  return (
    <div>
      {props.checkBox ? <Checkbox /> : null}
      {props.todo && props.todo.title}
      {props.onClicCompletedTodo ? (
        <button onClick={() => props.onClicCompletedTodo(props.index)}>
          Completed
        </button>
      ) : null}
      {props.onClickDeleteTodo ? (
        <button onClick={() => props.onClickDeleteTodo(props.index)}>
          Delete
        </button>
      ) : null}
    </div>
  );
};

export default TodoComponent;
