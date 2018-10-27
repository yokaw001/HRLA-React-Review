import React from 'react';

let Task = (props) =>(
  <div>
    <ul>
      <li>
        {props.task}
        <button onClick={()=>{props.delete(props.index)}}>Delete</button>
      </li>
    </ul>
  </div>
)

export default Task;