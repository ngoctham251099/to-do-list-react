import React from 'react';
import { RiCloseCircleLine } from "react-icons/ri";
function Todo({todos, removeTodo, completeTodo}) {
  return todos.map((todo, index) =>(
    <div
    className={todo.isDone ? 'todo-row complete' : 'todo-row'} key={index}
    >
      <div className="todo-list">
        <input class="checked" type="checkbox" onClick={() => completeTodo(todo.id)}></input>
        <div key={todo.id} > {todo.content}</div>
      </div>
      <div className="icons">
        <RiCloseCircleLine 
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
      </div>
    </div>
  ))
}

export default Todo