import React, { useState, useRef } from 'react';
import TodoList from './TodoList';
import {v4} from 'uuid';
import './App.css';

function App() {

  const [todos, setTodos] = useState<any[]>([{id : v4(), name : "Buy Milk", complete :false}, {id : v4(), name : "Learn React", complete :false}])
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
    <div id="MyApp" className="App">
      <div className='spacer-div'></div>
      <div className="todostuff" >
        <h1 className='title1'>Todo List</h1>
        <TodoList className="todolist" todos={todos} toggle={handleToggle}/>
        <div className="input-todo"> 
          <span>Todo : </span>
          <input className="text1" type="text" ref={content} />
        </div>
        <div className="button-container">
          <input className="add1" type="button" value="Add Todo" onClick={handleAdd} />
          <input className="delete1" type="button" value="Delete Completed Todos" onClick={handleDelete} />
        </div>
      </div>

    </div>
  );
}

export default App;
