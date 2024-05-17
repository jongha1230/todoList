import PropTypes from "prop-types";
import "./TodoItem.css";
function TodoItem({ todo, deleteTodo, toggleStatus }) {
  return (
    <article className="todo-item">
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <div className="btn-wrap">
        <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
          삭제
        </button>
        <button className="toggle-btn" onClick={() => toggleStatus(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </article>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleStatus: PropTypes.func.isRequired,
};

export default TodoItem;
