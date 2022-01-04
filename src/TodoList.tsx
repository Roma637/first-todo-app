import React from 'react'
import { TodoListHashType } from './dtypes'
import Todo from './Todo'

export default function TodoList({todos, toggle}:TodoListHashType) {
    return (
    
        <>
            {todos.map( todo => 
            
            <Todo className="todo" todo={todo} toggle={toggle} key={todo.id}/>
                
            )}
        </>
    
    )

}
