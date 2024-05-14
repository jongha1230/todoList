# 리액트 입문주차 개인과제

---

## 컴포넌트 분리

```javascript
// 분리 전 코드
<div>
  <div className="working-todos">
    <h2>Working..🔥</h2>
    {workingTodos.map((todo) => (
      <div key={todo.id} className="todo-item">
        <h3>{todo.title}</h3>
        <p>{todo.content}</p>
        <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
          삭제
        </button>
        <button className="toggle-btn" onClick={() => toggleStatus(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    ))}
  </div>
  <div className="done-todos">
    <h2>Done..🎉</h2>
       // 중복된 코드
  </div>
</div>
// 분리 후

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
</div>;

```
