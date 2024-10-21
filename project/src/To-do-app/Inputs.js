import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useTodo } from '../Context/TodoContext';

function Inputs() {
    const [todos, setTodos] = useState('');
    const { inputRef, addTodoList } = useTodo(); 

    function AddTodo() {
        if (todos.trim() === '') {
            alert("Enter your task");
        } else {
            addTodoList(todos); 
            setTodos(''); 
            inputRef.current.focus();
        }
    }
  
    return (
        <>
            <div className='InputArea'>
                <input type="text" id='inp' ref={inputRef} placeholder="Enter a Task" value={todos} onChange={(e) => setTodos(e.target.value)}/>
                <Button variant="outline-primary" className="Add" onClick={AddTodo} > Add </Button>
            </div>
        </>
    );
}

export default Inputs;
