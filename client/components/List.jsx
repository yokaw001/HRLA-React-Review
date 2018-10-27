import React from 'react';
import Task from './Task.jsx';

let List = (props) => (
  <div>
    {props.text.map((task, index)=> <Task task={task} delete={props.delete} edit={props.edit} index={index}/> )}
  </div>
)

export default List;