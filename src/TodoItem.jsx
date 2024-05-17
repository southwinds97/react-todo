import React from 'react';
import styles from './TodoItem.module.css';
import Checkbox from './components/Checkbox';

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`${styles.todo_item} ${todo.done ? styles.checked : ''}`}>
      <Checkbox checked={todo.done} onChange={() => onToggle(todo.id)}>
        {todo.text}
      </Checkbox>
      <button
        type="button"
        className={styles.remove_btn}
        onClick={() => onDelete(todo.id)}
      >
        Remove
      </button>
    </li>
  );
}
