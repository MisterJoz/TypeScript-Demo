import React, { useState } from "react";
import { TodoListItem } from "./TodoListItem";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";

//array of todos that will be passed as a prop to our TodoListItem Component
const initialTodos: Todo[] = [
  {
    text: "Walk the dog",
    complete: false,
  },
  {
    text: "Write app",
    complete: true,
  },
];

function App() {
  //react hook to manage state in our application
  const [todos, setTodos] = useState(initialTodos);

  //function that toggles todo
  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  //function that adds todos
  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h3>Todo List using TypeScript & React</h3>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
