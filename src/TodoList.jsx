import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, setTodos }) {
  // 배열데이터업데이트
  // todo로 각각 넘어온 id와 배열전체요소의 id를 비교하여
  // 같은 id를 가진 요소의 done값을 반전시킨다.
  function onToggle(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function onDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
