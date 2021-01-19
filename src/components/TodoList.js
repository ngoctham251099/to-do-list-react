import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';
import { getTodoItemsFromLocalStorage, saveTodoItemsToLocalStorage } from './helpers';
function TodoList() {


  const [todos, setTodos] = useState(getTodoItemsFromLocalStorage('todo') || []);

  // localStorage.setItem('todolist', JSON.stringify(todos));
  // console.log(JSON.parse(localStorage.getItem(todos.id)))

  //Add Todo
  const addTodo = todo => {
    const newTodo = [todo, ...todos];
    setTodos(newTodo);

    console.log(...todos);
    saveTodoItemsToLocalStorage('todo', JSON.stringify(newTodo));
  }

  //remove todo
  const removeTodo = id => {
    const removeArr = todos.filter(todo => todo.id !== id);
    setTodos(removeArr);
    saveTodoItemsToLocalStorage('todo', JSON.stringify(removeArr));
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
    saveTodoItemsToLocalStorage('todo', JSON.stringify(updateTodos));
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