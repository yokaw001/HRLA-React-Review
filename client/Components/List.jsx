import React from 'react';
import Task from './Task.jsx';

let List = (props) => {
    return (
        <div>
            {props.store.map((item, index) => <Task item={item} index={index} delete={props.delete} edit={props.edit} />)}
        </div>
    )
}

export default List;
