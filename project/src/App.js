import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './todo.module.css';
import Inputs from './To-do-app/Inputs';
import Todolist from './To-do-app/TodoList';
import React, { useRef, useState} from 'react';
import { TodoProvider } from './Context/TodoContext';

function App() {
  const [todoList, setTodoList] = useState([]); 

  let inputRef = useRef();

  // useEffect(() => {
  //   const savedTodos = localStorage.getItem("Todos");
  //   if (savedTodos) {
  //     setTodoList(JSON.parse(savedTodos));
  //   }
  // }, []);

  let addTodoList = (inputText) => {
    const newTodoList = [...todoList, inputText];
    setTodoList(newTodoList);
    // localStorage.setItem("Todos", JSON.stringify(newTodoList)); 
  };

  
  let deleteListItem = (key) => {
    let updatedTodoList = [...todoList];
    updatedTodoList.splice(key, 1);
    setTodoList(updatedTodoList);
    // localStorage.setItem("Todos", JSON.stringify(updatedTodoList)); 
  };

  
  const updateItem = (index) => {
    let updatedTodos = [...todoList];
    let newTask = prompt("Update your task:", updatedTodos[index]);
    if (newTask !== null && newTask.trim() !== "") {
      updatedTodos[index] = newTask;
      setTodoList(updatedTodos);
      // localStorage.setItem("Todos", JSON.stringify(updatedTodos)); 
    }
  };

  return (
    <TodoProvider value={{ todoList, addTodoList, deleteListItem, updateItem, inputRef }}>
      <div className={style.Apps}>
        <div className={style.Container}>
          <h1>Todo List</h1><br />
          <div className={style.InputArea}>
            <Inputs />
          </div>
          <div>
            {
              todoList.map((todo, i) => {
                return <Todolist key={i} todo={todo} index={i} />
              })
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
