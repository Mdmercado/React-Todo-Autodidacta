import React from "react";
import { TodoItem } from "./TodoItem";

function TodoList({ todos, toggleTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
}

//Exportando de forma nombrada

export { TodoList };
