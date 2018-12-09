import React from 'react';

let Task = (props) => {
    return (
        <ul>
            <li>
                {props.item}
                <button type="delete" onClick={() => { props.delete(props.index) }} >Delete</button>
                <button type="edit" onClick={() => { props.edit(props.index) }}>Edit</button>
            </li>
        </ul>
    )
}

export default Task;