import { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

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
        <TodoForm addTodo={addTodo} />
        <div>
          <div className="working-todos">
            <h2>Working..🔥</h2>
            {workingTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleStatus={toggleStatus}
              />
            ))}
          </div>
          <div className="done-todos">
            <h2>Done..🎉</h2>
            {doneTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleStatus={toggleStatus}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
