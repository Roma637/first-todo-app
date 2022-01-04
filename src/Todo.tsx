import React from 'react'
import { TodoHashType } from './dtypes'

export default function Todo({todo, toggle}:TodoHashType) {
    return (
        <div>
            <input type="checkbox" checked={todo.complete} onChange={() => toggle(todo.id)} />
            <span className='todotext' >{todo.name} </span>
            <br />
        </div>
    )
}
