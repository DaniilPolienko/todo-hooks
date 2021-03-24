import List from '@material-ui/core/List';
import React, { useState, useEffect } from 'react';
import Input from './input/Input';
import Filters from './filters/Filters'
import Li from './listitem/Li'
import Pages from './pagination/Pages'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
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
const [open, setOpen] = useState(false);
const [error, setError] = useState("")
const [order, setOrder] = useState("asc")

const handleSubmit = ((e) => {
    makePostRequest();
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
    const itemToBeDeleted = todos.find(el => el.id === index)
      makeDeleteRequest(itemToBeDeleted)
   }


   const handleCheckBoxChecked = (e, index) => {
    const newTodos = [...todos]
    const currentTodo = newTodos.find(el => el.id === index)
    currentTodo.checked = e.target.checked

    checkTask(currentTodo, e.target.checked)
    setTodos([...newTodos])
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


    editTask(currentTodo, editedMessage, "name")
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

  async function getTasks(order) {
    try {
    const {data} = await axios.get(process.env.REACT_APP_API + '/v1/tasks/5?order=' + order);
    setTodos(data.map((item, index) => ( {id: index, message: item.name, checked: item.done, date: item.createdAt, uuid: item.uuid})))
    }
    catch(err) {
      setOpen(true)
      setError(err.toString())
    }
  }

    async function makePostRequest() {
        try {
            const task = { name: input, done: false };
            const res = await axios.post(process.env.REACT_APP_API + '/v1/task/5', task);
            const data = res.data;
            getTasks(order)
            setOpen(false)
        }
        catch(err) {
            setOpen(true)
            setError(err.toString())
        }
    }

    async function makeDeleteRequest(itemToBeDeleted) {
        try {
            const element = await axios.delete(process.env.REACT_APP_API + '/v1/task/5/' + itemToBeDeleted.uuid);
            console.log(element)
            getTasks(order)
        }
        catch(err) {
            setOpen(true)
            setError(err.toString())
        }
    }

  async function checkTask(task, state) {
    try {
  await axios.patch(process.env.REACT_APP_API + '/v1/task/5/' + task.uuid,
	{ 
		done: state
	}, 
);
    }
    catch(err) {
      setOpen(true)
      setError(err.toString())
    }
  }

  async function editTask(task, state) {
    try {
    await axios.patch(process.env.REACT_APP_API + '/v1/task/5/' + task.uuid,
    { 
      name: state
    }, 
  );
    }
    catch(err) {
      setOpen(true)
      setError(err.toString())
    }
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
        getTasks(order)
    }, [order])

    useEffect(() => {
     getTasks(order)
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
          setOrder = {setOrder}
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

      <Snackbar open={open} autoHideDuration={5000} onClose = {()=>setOpen(false)}>
        <Alert  onClose = {()=> setOpen(false)} severity="error">
          {error}
        </Alert>
      </Snackbar>

    </>
    );

  }

