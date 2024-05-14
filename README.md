# 리액트 입문주차 개인과제

---

#### 1. JSX문법이란 무엇인가요?

- JSX문법이란 **JavaScript의 확장 문법**으로 **React에서 UI 구조를 표현**하는데 사용하며 HTML 태그와 유사하게 생겼지만 JavaScript의 **createElement 함수 호출을 직관적으로 표현**해주는 편의를 제공하는 확장 문법으로 **완전히 다른 것**입니다.

#### 2. 사용자가 입력하는 값, 또는 이미 입력된 값, 투두의 타이틀과 같은 애플리케이션의 상태를 관리하기 위해 리액트의 어떤 기능을 사용하셨나요?

- **useState Hook**를 사용했습니다.
- **사용자가 입력하는 값** - TodoForm 컴포넌트의 title과 content에 사용자가 값을 입력할 때 setTitle 및 setContent를 사용하여 상태를 각각 업데이트 했습니다.

#### 3. 애플리케이션의 상태 값들을 컴포넌트 간 어떤 방식으로 공유하셨나요?

- **부모 컴포넌트에 자식 컴포넌트 props 전달** - **App 컴포넌트**에서 todos 상태와 관련된 함수들을 정의하고, **TodoForm 및 TodoItem 컴포넌트**에 **props로 전달**하여 상태를 관리했습니다.

#### 4. 기능 구현을 위해 불변성 유지가 필요한 부분이 있었다면 하나만 설명해 주세요.

- todo를 추가하는 함수에 todos배열에 새로운 항목을 추가하는 부분이 불변성 유지가 필요했습니다.

```javascript
const addTodo = (title, content) => {
  setTodos([...todos, { id: Date.now(), title, content, isDone: false }]);
};
```

- todos의 배열에 직접 값을 추가하는 것이 아닌 스프레드 연산자를 이용해서 배열을 생성해서 배열의 요소를 복사한 후 새로운 항목을 추가하는 방식으로 사용했습니다.

#### 5. 반복되는 컴포넌트를 파악하고 재사용할 수 있는 컴포넌트로 분리해 보셨나요? 그렇다면 어떠한 이점이 있었나요?

- Todo 항목을 만드는 TodoItem 컴포넌트가 반복되는 컴포넌트를 파악하고 분리해서 관리 했습니다.
- **코드 재사용성**- 새로운 기능을 추가하거나 수정하면 여러 곳에 한 번에 적용될 수 있어서 코드를 재사용하기 쉬워졌습니다.
- **유지 보수**- 버그를 수정할 때 분리된 컴포넌트만 수정하면 되서 코드의 유지 보수가 간편해 졌다고 생각합니다.

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
</div>;

```
