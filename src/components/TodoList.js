import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'
function TodoList() {

  const [todos, setTodos] = useState([]);

  //Add Todo
  const addTodo = todo => {
    const newTodo = [todo, ...todos];
    setTodos(newTodo);
    console.log(...todos);
  }

  //remove todo
  const removeTodo = id => {
    const removeArr = todos.filter(todo => todo.id !== id);
    setTodos(removeArr);
  }

  //complete todo
  const completeTodo = id => {
    let updateTodos = todos.map(todo => {
      if(todo.id === id){
        todo.isDone = !todo.isDone;
      }
      return todo;
    })
    setTodos(updateTodos);
  }

  return(
    <>
      <h1>todos</h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo 
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </>
  )

}

export default TodoList