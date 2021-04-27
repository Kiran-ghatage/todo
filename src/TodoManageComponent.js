import React from "react";
import TodoComponent from "./TodoComponent";
import TodoInputComponent from "./TodoInputComponent";

// todo Object - { title: "todo 1", status: false }
function TodoManageComponent() {
  const [todos, setTodos] = React.useState([]);

  const [completedTodos, setCompletedTodos] = React.useState([]);

  const onClickAddTodo = (todo) => {
    const newTodoList = [...todos, todo];
    setTodos(newTodoList);
  };

  const onClickDeleteTodo = (index) => {
    const newTodoList = [...todos];
    newTodoList.splice(index, 1);
    setTodos(newTodoList);
  };

  const onClicCompletedTodo = (index) => {
    const newTodoList = [...todos];
    setCompletedTodos(newTodoList[index]);
    newTodoList[index].status = true;
    setTodos(newTodoList);
  };

  return (
    <div style={{ marginTop: "10%" }}>
      <TodoInputComponent onClickAddTodo={onClickAddTodo} />
      <div>
        <h6>Todos</h6>
        {todos.map((todo, index) =>
          todo.status === false ? (
            <TodoComponent
              checkBox
              key={index}
              index={index}
              todo={todo}
              onClickDeleteTodo={onClickDeleteTodo}
              onClicCompletedTodo={onClicCompletedTodo}
            />
          ) : null
        )}
      </div>

      <div>
        <h6>Copleted Todos</h6>
        {todos &&
          todos.length >= 0 &&
          todos.map((todo, completedTodosIndex) =>
            todo.status ? (
              <TodoComponent
                key={completedTodosIndex}
                index={completedTodosIndex}
                todo={todo}
              />
            ) : null
          )}
      </div>
    </div>
  );
}

export default TodoManageComponent;
