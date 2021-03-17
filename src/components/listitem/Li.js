import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import { Checkbox } from '@material-ui/core';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ClearIcon from "@material-ui/icons/Clear";
import ListItem from '@material-ui/core/ListItem';
import "./listitem.css";

export default function Li(props) {
  const handleDeleteOne = (e, index) => {
    let newTodos = [...props.todos]
    newTodos = newTodos.filter(item => item.id !== index)
    props.setTodos ([...newTodos])
   }

   const handleCheckBoxChecked = (e, index) => {
    let newTodos = [...props.todos]
    const currentTodo = newTodos.find(el => el.id === index)
    currentTodo.checked = e.target.checked
    props.setTodos([...newTodos])
    console.log(props.todos)
  }
    return (
    <ListItem
              className="listitem"
              divider 
    >
                <Checkbox
                   checked = {props.todoChecked}
                   onChange={(e) => handleCheckBoxChecked(e, props.todoId)}/>
                  
                <ListItemText 
                  primary ={props.todoMessage}
                />
                
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