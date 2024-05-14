import { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoSection from "./TodoSection";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title, content) => {
    setTodos([...todos, { id: Date.now(), title, content, isDone: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <>
      <div className="todo-container">
        <h1 id="header-title">My Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <div>
          <TodoSection
            title="Working..🔥"
            todos={workingTodos}
            deleteTodo={deleteTodo}
            toggleStatus={toggleStatus}
          />
          <TodoSection
            title="Done..🎉"
            todos={doneTodos}
            deleteTodo={deleteTodo}
            toggleStatus={toggleStatus}
          />
        </div>
      </div>
    </>
  );
}

export default App;
