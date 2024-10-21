import { Button } from 'react-bootstrap';
import { useTodo } from '../Context/TodoContext';


function Update({ index }){
    const {updateItem} = useTodo();
    return(
        <>
         <Button variant="outline-success" onClick={(e)=> {
            updateItem(index)
         }}>Update</Button>{' '}
        </>
    )
}
export default Update;    