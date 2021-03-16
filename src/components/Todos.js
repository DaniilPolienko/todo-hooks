import List from '@material-ui/core/List';
import React, { useEffect, useState } from 'react';
import Input from './input/Input';
import Filters from './filters/Filters'
import Li from './listitem/Li'
import Pages from './pagination/Pages'


export default function Todos(props) {
const [input, setInput]=useState("")
const [todos, setTodos]=useState([])
const [filteredTodos, setFilteredTodos] = useState([])
const [todoId, setTodoId]=useState(0)
const [filter, setFilter]=useState("all")
const [numberOfPages, setNumberOfPages] = useState(1)


const handleSubmit = ((e) => {
  
    setTodos([...todos, {id: todoId, message: input, checked: false, date: new Date().toLocaleString()}]);
    setFilteredTodos([...todos, {id: todoId, message: input, checked: false, date: new Date().toLocaleString()}]);
    setTodoId(todoId + 1)
    setFilter("all")
});

  const handleClearCompleted = () => {
    let newTodos = [...todos]
    const savedTodos = newTodos.filter(item => item.checked === false)
    setTodos([...savedTodos])
  }


  return (
    <>
        <Input 
          handleSubmit = {handleSubmit}
          setInput = {setInput}
       />
        <Filters
          todos = {todos}
          filter = {filter}
          setFilteredTodos = {setFilteredTodos}
          setFilter = {setFilter}
        />

        <List>
        {filteredTodos.map((todo) => (
            <Li
              todoId = {todo.id}
              todoChecked = {todo.checked}
              todoMessage = {todo.message}
              todoDate = {todo.date}
              setTodos = {setTodos}
              todos = {todos}
   
            />
        ))}
        </List>
        <p 
          className="clear"
          onClick={handleClearCompleted}
          >clear completed</p>

        <Pages
       
          numberOfPages = {numberOfPages}
        />
    </>
    );

  }

