import styles from './TodoCount.module.css';

export default function TodoCount({ todos }) {
  // todo배열요소중 todo.done이 true인 요소만 필터링하여 배열로 만든 후, 그 배열의 길이를 반환한다.
  const done = todos.filter((todo) => todo.done).length;
  return (
    <div className={styles.todo_count}>
      완료: {done} / 할 일 : {todos.length}
    </div>
  );
}
