import List from '@material-ui/core/List';
import React, { useState, useEffect } from 'react';
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
const [idToBeEdited, setIdToBeEdited] = useState(-1)
const [editedMessage, setEditedMessage] = useState("")
const [currentPage, setCurrentPage] = useState(1)


const handleSubmit = ((e) => {
  
    setTodos([...todos, {id: todoId, message: input, checked: false, date: new Date().toLocaleString()}]);
 // setFilteredTodos([...todos, {id: todoId, message: input, checked: false, date: new Date().toLocaleString()}]);
    setTodoId(todoId + 1)
    setFilter("all")
});

  const handleClearCompleted = () => {
    let newTodos = [...todos]
    const savedTodos = newTodos.filter(item => item.checked === false)
    setTodos([...savedTodos])
  }

  const filterTodos = (filterType, page) => {
    const newTodos = [...todos]
    switch(filterType) {
      case "all":
        setFilteredTodos([...todos.slice((page - 1) * 5, (page - 1) * 5 + 5)])
        setFilter("all")

        break;
      case "active":
        setFilteredTodos(newTodos.filter(item => item.checked === false).slice((page - 1) * 5, (page - 1) * 5 + 5))
        setFilter("active")
        filterTodos()

        break;
      case "done":
        setFilteredTodos(newTodos.filter(item=> item.checked === true).slice((page - 1) * 5, (page - 1) * 5 + 5))
        setFilter("done")
        filterTodos()

        break;
      default:
        break;
    }
  };

  const handleDeleteOne = (e, index) => {
    let newTodos = [...todos]
    newTodos = newTodos.filter(item => item.id !== index)
    setTodos ([...newTodos])
   }


   const handleCheckBoxChecked = (e, index) => {
    const newTodos = [...todos]
    const currentTodo = newTodos.find(el => el.id === index)
    currentTodo.checked = e.target.checked
    setTodos([...newTodos])
    console.log(todos)
  }

  

  const handleEditInputChange = (e) => {
    if (e.key === "Enter") {
      if(e.target.value.trim() === "") {
        alert("Поле пусто") 
      }
      else {
        e.preventDefault();
        handleSubmitEdited();
      }
    }
    else {
      if (e.key === "Escape") {
        setIdToBeEdited(-1)
      }
      else {
      setEditedMessage(e.target.value)
      }
    }
  }

  const handleSubmitEdited = () => {
    const newTodos = [...todos]
    const currentTodo = newTodos.find(el => el.id === idToBeEdited)
    currentTodo.message = editedMessage
    currentTodo.date = new Date().toLocaleString()
    setTodos([...newTodos])
    setIdToBeEdited(-1)
  }

  const changePage = (e, page) => {
    setCurrentPage(page)
  }

  const countPages = (filterType) => {
      switch (filterType) {
        case "all":
          return Math.ceil(todos.length / 5)
        case "active":
          return Math.ceil(todos.filter(item => item.checked === false).length / 5)
        case "done":
          return Math.ceil(todos.filter(item => item.checked === true).length / 5)
        default:
          break;
      }
  }

  
useEffect(() => {
    filterTodos(filter, currentPage);
   }, [todos])

   useEffect(() => {
    filterTodos(filter, currentPage);
   }, [currentPage])

   useEffect(() => {
    filterTodos(filter, currentPage);
   }, [filter])

   useEffect(() => {
    countPages(filter)
   }, [filter])




  return (
    <>
        <Input 
          handleSubmit = {handleSubmit}
          setInput = {setInput}
       />
        <Filters
          filter = {filter}
          todos = {todos}
          setTodos = {setTodos}
          filterTodos = {filterTodos}
        />

        <List>
        {filteredTodos.map((todo) => (
            <Li
              todoId = {todo.id}
              handleCheckBoxChecked = {handleCheckBoxChecked}
              todoChecked = {todo.checked}
              idToBeEdited = {idToBeEdited}
              todoMessage = {todo.message}
              handleEditInputChange = {handleEditInputChange}
              setIdToBeEdited = {setIdToBeEdited}
              todoDate = {todo.date}
              handleDeleteOne = {handleDeleteOne}
              key = {todo.id}
            />
        ))}
        </List>
        <p 
          className="clear"
          onClick={handleClearCompleted}
          >clear completed</p>

        <Pages
   
          changePage = {changePage}
          countPages = {countPages(filter)}
        />
    </>
    );

  }

