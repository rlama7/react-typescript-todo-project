import React from 'react';
import './styles.css';
import { Todo } from '../model/model';
import TodoItem from './TodoItem';

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todoList, setTodoList }) => {
  return (
    <div className="todolist">
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
};

export default TodoList;
