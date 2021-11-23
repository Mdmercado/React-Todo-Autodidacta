import React from "react";

function TodoItem({ todo, toggleTodo }) {
  const { id, task, completed } = todo;

  // funcion CHK
  const todoClick = () => {
    toggleTodo(id);
  };
  return (
    <li>
      <input type="checkbox" checked={completed} onChange={todoClick} />
      {task}
    </li>
  );
}

export { TodoItem };
