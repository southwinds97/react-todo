import React from 'react';
import styles from './TodoAdd.module.css';

export default function TodoAdd({ todos, setTodos }) {
  const [txt, setTxt] = React.useState('');

  function handleAdd() {
    setTxt('');
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: txt,
        done: false,
      },
    ]);
  }

  function handleEnter(e) {
    if (e.key === 'Enter') {
      handleAdd();
    }
  }

  return (
    <div className={styles.todo_add}>
      <input
        value={txt}
        type="text"
        placeholder="할 일을 입력하세요"
        title="할 일을 입력하세요"
        onChange={(e) => setTxt(e.target.value)}
        onKeyUp={handleEnter}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}
