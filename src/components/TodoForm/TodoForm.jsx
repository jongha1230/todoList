import PropTypes from "prop-types";
import { useRef, useState } from "react";
import "./TodoForm.css";

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const titleInputRef = useRef(null);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // 유효성 검사
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 입력해주세요");
      return;
    }

    addTodo(title, content);
    setTitle("");
    setContent("");
    titleInputRef.current.focus();
  };

  return (
    <form className="todo-form" onSubmit={onSubmitHandler}>
      <input
        ref={titleInputRef}
        type="text"
        placeholder="제목"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="todo-title-input"
      />
      <input
        type="text"
        placeholder="내용"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        className="todo-content-input"
      />
      <button type="submit">추가</button>
    </form>
  );
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
