import React from 'react'

export default function TodoList({ todoItems }) {
    return (
        <div>
            {todoItems.map( todoItem => (
                <li key={todoItem.id}>{todoItem.text}</li>
            ))}
        </div>
    )
}
