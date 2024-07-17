import React, { useState } from 'react'

export default function ToDoInput(props) {
  const {handleAddTodos, todoValue, setTTodoValue} = props
  return (
    <header>
      <input value={todoValue} onChange={(e)=>{setTTodoValue(e.target.value)}}placeholder="Enter todo..." />
      <button onClick={()=>{handleAddTodos(todoValue)
         setTTodoValue('')
         } }>Add</button>
      
    </header>
  )
}
