import React, { useState, useEffect } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';
import Footer from './Footer';
import { getTodoItemsFromLocalStorage, saveTodoItemsToLocalStorage } from './helpers';
function TodoList() {

  const [todos, setTodos] = useState(getTodoItemsFromLocalStorage('todo') || []);
  const [status, setStatus] = useState('All');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //use useEffect
  useEffect(() =>{
    filteredHandle();
  },[todos,status]);

  //Add Todo
  const addTodo = (todo) => {
    const newTodo = [todo, ...todos];
    setTodos(newTodo);
    saveTodoItemsToLocalStorage('todo', JSON.stringify(newTodo));
  }

  const updateTodo = (id, newValue) => {
    let updateTodos = todos.map(todo => {
      if(todo.id === id){
        return newValue;
      }
      return todo;
    })
    setTodos(updateTodos);
    saveTodoItemsToLocalStorage('todo', JSON.stringify(updateTodos));
  };

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

  //count todo unfishied
  let countTodos = 0;
  todos.forEach(todo => {
    if(!todo.isDone)
      countTodos += 1;
    return countTodos;
  })
  const filteredHandle = () =>{
    switch(status) {
      case 'action':
        setFilteredTodos(todos.filter(todo => !todo.isDone))
        break;
      case 'complete':
        setFilteredTodos(todos.filter(todo => todo.isDone))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const deleteAllTodosComplete = () => {
    const removeTodos = todos.filter(todo => todo.isDone);
    setTodos(removeTodos);
  }

  return(
    <>
      <h1>todos</h1>
      <div className="todolist">
        <TodoForm onSubmit={addTodo} setStatus={setStatus}/>
        <Todo 
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
          filteredTodos={filteredTodos}
        />
        <Footer
          todos={todos}
          count={countTodos}
          filteredHandle={filteredHandle}
          setStatus={setStatus}
          deleteAllTodosComplete={deleteAllTodosComplete}
        />
      </div>
    </>
  )

}

export default TodoList;