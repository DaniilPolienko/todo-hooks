import React, {useState, useEffect} from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import { Checkbox } from '@material-ui/core';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ClearIcon from "@material-ui/icons/Clear";
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';

import "./listitem.css";

export default function Li(props) {
  const [idToBeEdited, setIdToBeEdited] = useState(-1)
  const [editedMessage, setEditedMessage] = useState("")
  
  const handleDeleteOne = (e, index) => {
    let newTodos = [...props.todos]
    newTodos = newTodos.filter(item => item.id !== index)
    props.setTodos ([...newTodos])
   }

   const handleCheckBoxChecked = (e, index) => {
    const newTodos = [...props.todos]
    const currentTodo = newTodos.find(el => el.id === index)
    currentTodo.checked = e.target.checked
    props.setTodos([...newTodos])
    console.log(props.todos)
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
    const newTodos = [...props.todos]
    const currentTodo = newTodos.find(el => el.id === idToBeEdited)
    currentTodo.message = editedMessage
    currentTodo.date = new Date().toLocaleString()
    props.setTodos([...newTodos])
    setIdToBeEdited(-1)
  }

  

    return (
    <ListItem
              className="listitem"
              divider 
            
    >
                <Checkbox
                   checked = {props.todoChecked}
                   onChange={(e) => handleCheckBoxChecked(e, props.todoId)}/>
                
                {idToBeEdited === props.todoId ? (
                 <TextField
                  label={props.todoMessage}
                  onChange = {handleEditInputChange}
                  onKeyDown = {handleEditInputChange}
                  id="standard-basic" 
                   />
                ) : (
                  <ListItemText
                  onDoubleClick = {() => setIdToBeEdited(props.todoId)} 
                  primary ={props.todoMessage}
                />
                )}
                
                <p>{props.todoDate}</p>
                 <ListItemIcon>
                    <ClearIcon
                      className="delete"
                      onClick={(e) => handleDeleteOne(e, props.todoId)}
                    />
                  </ListItemIcon>
                  
    </ListItem>
    );
  }