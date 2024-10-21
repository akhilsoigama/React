import Update from './Update'
import Delete from './Delete'
import React from 'react'

function TodoList(props) {
    return (
        <>
            <ul className="List">
                <li>{props.todo}</li>
                <li><Update index={props.index}/> <Delete /></li>
            </ul>
        </>
    )
}

export default TodoList;  
