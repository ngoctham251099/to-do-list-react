import React, { useState } from 'react';

function TodoForm(props){
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.random() * 1000,
      content: input
    });

    setInput('');
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <>
        <input
          placeholder='What needs to be done?'
          value={input}
          onChange={handleChange}
          name='text'
          className='todo-input'
        ></input>
        <button onClick={handleSubmit} className="todo-button">Add</button>
      </>
    </form>
  )
}

export default TodoForm