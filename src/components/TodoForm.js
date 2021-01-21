import React, { useRef, useState } from 'react';
import { RiArrowDownSLine } from "react-icons/ri";

function TodoForm(props){
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef('');

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    
    if(e.keyCode === 13)
    {
      console.log(input);
      props.onSubmit({
        id: Math.floor(Math.random() * 1000),
        content: input,
        isDone: false
      });
      setInput('');
    }
  };

  return (
    <div>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
            onKeyDown={handleSubmit}
          />
        </>
      ) : (
      <div className="add-todo">
        <RiArrowDownSLine
          onClick={props.onClick}
          className="complete-icons"
        />
        <input
          placeholder='What needs to be done?'
          value={input}
          onChange={handleChange}
          name='text'
          className='todo-input'
          onKeyDown={handleSubmit}
        ></input>
      </div>
      )}
    </div>
  )
}

export default TodoForm