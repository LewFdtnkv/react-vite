import React, { useState } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import ToDoCard from './components/ToDoCard';
import './cssFolder/index.css'

export default function App() {
  const[todos, setTodos]=useState([])
  const[todoValue,setTTodoValue]=useState('')
  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)

  }
  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex)=>{
      return todoIndex !== index
    })
    setTodos(newTodoList)
  }
  function handleEditTodo(index){
    const valueToBeEdited = todos[index]
    setTTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }
  return (
    <>
      <ToDoInput todoValue={todoValue} setTTodoValue={setTTodoValue} handleAddTodos = {handleAddTodos}/>
      <ToDoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    
    </>
  );
}


