import { Button } from 'react-bootstrap';
import React from 'react'
import { useTodo } from '../Context/TodoContext';


function Delete(){
  const {deleteListItem} = useTodo();
    return(
        <>
            <Button variant="outline-danger" onClick={(e) =>{
                deleteListItem()
                }}>Delete</Button>{' '}
        </>
    )
}
export default Delete;   