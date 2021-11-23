import React from "react";
import { useState, useRef, useEffect } from "react";
import { TodoList } from "./Components/TodoList";
import { v4 as uuidv4 } from "uuid";

const KEY = "todoApp.todos";
function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Tarea 1", completed: false },
  ]);

  const todoTaskRef = useRef();
  //
  // traer tareas ya almacenadas por eso arranca vacío
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  //Guardar en LS
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }, [todos]);

  //
  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed; //igual a la  contraria del estado actual
    setTodos(newTodos);
  };
  // funcion para agregar tareas|
  const AddTodo = () => {
    const task = todoTaskRef.current.value;
    if (task === "") return;

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), task, completed: false }];
    });
    todoTaskRef.current.value = "";
  };

  // Funcion elimina completados
  const deleteTodos = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea..."></input>
      <button onClick={AddTodo}>➕</button>
      <button onClick={deleteTodos}>❌</button>
      <div>
        <h1>
          Has completado {todos.filter((todo) => todo.completed).length} de{" "}
          {todos.length} tareas
        </h1>
      </div>
    </React.Fragment>
  );
}

export { App };
