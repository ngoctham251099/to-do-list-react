import React from 'react';

function Footer ({ count, setStatus, deleteAllTodosComplete }) {
  const statusHandle = (e) =>{
    console.log(e.target.value);
    setStatus(e.target.value);
  }
  return (
    <div class="footer">
      <p>{count} item left</p>
      <button className="clear-complete" onClick={deleteAllTodosComplete}>Clear complete</button>
      <select onChange={statusHandle}>
        <option value="all">All</option>
        <option value="action">Action</option>
        <option value="complete">Complete</option>
      </select>
    </div>
  )
}

export default Footer