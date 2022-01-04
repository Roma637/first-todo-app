import React, { useState, useRef } from 'react';
import TodoList from './TodoList';
import {v4} from 'uuid';
import './App.css';

function App() {

  const [todos, setTodos] = useState<any[]>([])
  const content:any = useRef()

  const handleAdd = () => {

    const newtodo = content.current.value 

    if (newtodo==='') return

    const newtodos = [...todos, {id:v4(), name:newtodo, complete:false}]
    setTodos(newtodos);

    content.current.value = null    
  }

  const handleDelete = () => {

    const newtodos = todos.filter(todo => todo.complete===false)
    setTodos(newtodos);

  }

  const handleToggle = (id:string) => {

    console.table(todos)

    const newtodos = todos.map(todo => 
        todo.id===id ? {...todo, complete:!todo.complete} : todo
      )

    setTodos(newtodos);

    console.table(todos)

  }

  return (
    <div className="App">
      
      <div className="todostuff" >
        <h1 className='title1'>Todo List</h1>
        <TodoList className="todolist" todos={todos} toggle={handleToggle}/>
        <div><input className="text1" type="text" ref={content} /></div>
        <div className="button-container">
          <input className="add1" type="button" value="add todo" onClick={handleAdd} />
          <input className="delete1" type="button" value="delete completed todos" onClick={handleDelete} />
        </div>
      </div>

    </div>
  );
}

export default App;
