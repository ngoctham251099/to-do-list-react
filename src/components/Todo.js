import React,{useState} from 'react';
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm'
function Todo({todos, removeTodo, completeTodo, updateTodo,filteredTodos}) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = (value)  => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if(edit.id) {
    console.log(edit.id);
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  
  return filteredTodos.map((todo, index) =>(
    <div
    className={todo.isDone ? 'todo-row complete' : 'todo-row'} key={index}
    >
      <div className="todo-list">
        <input class="checked" type="checkbox" checked={todo.isDone ? "checked" : ""} onClick={() => completeTodo(todo.id)}></input>
        <div key={todo.id} > {todo.content}</div>
      </div>
      <div className="icons">
        <TiEdit
            onClick={!todo.isDone ? () => setEdit({ id: todo.id, value: todo.content }): ""}
            className='edit-icon'
        />
        <RiCloseCircleLine 
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
      </div>
    </div>
  ))
}

export default Todo