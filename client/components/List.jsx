import React from 'react';
import Task from './Task.jsx';
//pass in index along with task to delete based on index

let List = (props) => (
  <div>
    {props.text.map((task, index)=> <Task task={task} delete={props.delete} edit={props.edit} index={index}/> )}
  </div>
)

export default List;