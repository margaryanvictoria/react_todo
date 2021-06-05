import React, { useState } from 'react'
import AddTodoItem from './AddTodoItem'
import TodoList from './TodoList'

export default function CompTodoList() {

    const [todoItems, setTodoItems] = React.useState([
        {
          id: 1,
          text: "wash dishes",
          complete: false
        },
        {
          id: 2,
          text: "vacuum",
          complete: false
        },
        {
          id: 3,
          text: "walk dog",
          complete: false
        }
    ])
    
    return (
        <div>
            <h1>Todo List</h1>
            <TodoList todoItems={todoItems} />
            <AddTodoItem todoItems={todoItems} setTodoItems={setTodoItems} />
        </div>
    )
}
