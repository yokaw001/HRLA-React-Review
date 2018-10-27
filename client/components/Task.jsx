import React from 'react';

let Task = (props) =>(
  <div>
    <ul>
      <li>
        {props.task}
      </li>
    </ul>
  </div>
)

export default Task;