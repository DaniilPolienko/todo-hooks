import List from '@material-ui/core/List';
import React, { useState, useEffect } from 'react';
import Input from './input/Input';
import Filters from './filters/Filters'
import Li from './listitem/Li'
import Pages from './pagination/Pages'
import axios from 'axios'


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
  
    //setTodos([...todos, {id: todoId, message: input, checked: false, date: new Date().toLocaleString()}]);
   // setTodoId(todoId + 1)
   // setFilter("all")
    
    async function makePostRequest() {
      console.log("hi");
     const task = { name: input, done: false };
     const res = await axios.post('https://todo-api-learning.herokuapp.com/v1/task/5', task);
     const data = res.data;
     console.log(data);
     makeGetRequest()
 }
    makePostRequest();
    
    console.log(todos)
    
});

  const handleClearCompleted = () => {
    const newTodos = [...todos]
    const savedTodos = newTodos.filter(item => item.checked === false)
    setTodos([...savedTodos])
  }

  const filterTodos = (filterType) => {
    let newTodos = [...todos]
    switch(filterType) {
      case "all":
        setFilteredTodos([...todos.slice((currentPage - 1) * 5, (currentPage - 1) * 5 + 5)])
        setFilter("all")

        break;
      case "active":
        setFilteredTodos(newTodos.filter(item => item.checked === false).slice((currentPage - 1) * 5, (currentPage - 1) * 5 + 5))
        setFilter("active")
        filterTodos()

        break;
      case "done":
        setFilteredTodos(newTodos.filter(item=> item.checked === true).slice((currentPage - 1) * 5, (currentPage - 1) * 5 + 5))
        setFilter("done")
        filterTodos()

        break;
      default:
        break;
    }
  };

  const handleDeleteOne = (e, index) => {
    // let newTodos = [...todos]
    // newTodos = newTodos.filter(item => item.id !== index)
    // setTodos ([...newTodos])
    const itemToBeDeleted = todos.find(el => el.id === index)


    async function makeDeleteRequest() {
      const element = await axios.delete('https://todo-api-learning.herokuapp.com/v1/task/5/' + itemToBeDeleted.uuid);
      console.log(element)
      makeGetRequest()
    }
      makeDeleteRequest()
   }


   const handleCheckBoxChecked = (e, index) => {
    const newTodos = [...todos]
    const currentTodo = newTodos.find(el => el.id === index)
    currentTodo.checked = e.target.checked

    makePatchCheckRequest(currentTodo, e.target.checked)
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

    makePatchEditRequest(currentTodo, editedMessage, "name")
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

  async function makeGetRequest() {
    const {data} = await axios.get('https://todo-api-learning.herokuapp.com/v1/tasks/5?order=asc');
    setTodos(data.map((item, index) => ( {id: index, message: item.name, checked: item.done, date: item.createdAt, uuid: item.uuid})))
  }

  async function makePatchCheckRequest(item, state) {
  await axios.patch('https://todo-api-learning.herokuapp.com/v1/task/5/' + item.uuid, 
	{ 
		done: state
	}, 
);
  }

  async function makePatchEditRequest(item, state) {
    await axios.patch('https://todo-api-learning.herokuapp.com/v1/task/5/' + item.uuid, 
    { 
      name: state
    }, 
  );
    }

  
useEffect(() => {
    filterTodos(filter);
   }, [todos])

   useEffect(() => {
    filterTodos(filter);
   }, [currentPage])

   useEffect(() => {
    filterTodos(filter);
   }, [filter])

   useEffect(() => {
    countPages(filter)
    console.log(todos)
   }, [filter])

    useEffect(() => {
     makeGetRequest()
    }, [])

    


  return (
    <>
        <Input 
          handleSubmit = {handleSubmit}
          setInput = {setInput}
       />
        <Filters
          filter = {filter}
          setFilteredTodos = {setFilteredTodos}
          filteredTodos = {filteredTodos}
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

