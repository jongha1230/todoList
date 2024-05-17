import PropTypes from "prop-types";
import TodoItem from "../TodoItem";

function TodoSection({ title, todos, deleteTodo, toggleStatus }) {
  return (
    <section className="todo-section" style={{ margin: "20px" }}>
      <h2>{title}</h2>
      <div className="todo-item-wrap">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleStatus={toggleStatus}
          />
        ))}
      </div>
    </section>
  );
}

TodoSection.propTypes = {
  title: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    })
  ).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleStatus: PropTypes.func.isRequired,
};

export default TodoSection;
