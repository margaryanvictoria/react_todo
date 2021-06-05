import React from 'react'

export default function AddTodoItem({ todoItems, setTodoItems }) {

	const inputRef = React.useRef()
    
	// should really start using public class fields syntax
	function handleSubmit(e) {
		// we don't want the page to reload on submit
		e.preventDefault();

		const text = e.target.elements.addTodoItem.value
		
		const todoItem = {
			id: todoItems.length + 1,
			text,
			complete: false
		}

		setTodoItems(todoItems => {
			return todoItems.concat(todoItem)
		})

		inputRef.current.value = ""
	}


	return (
		<form onSubmit={handleSubmit}>
			<input name="addTodoItem" placeholder="Add todo item" ref={inputRef} />
			<button type="submit">Add</button>
		</form>
	)
}
