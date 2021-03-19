import React, {useState, useEffect} from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import { Checkbox } from '@material-ui/core';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ClearIcon from "@material-ui/icons/Clear";
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';

import "./listitem.css";

export default function Li(props) {


  

    return (
    <ListItem
              className="listitem"
              divider 
            
    >
                <Checkbox
                   checked = {props.todoChecked}
                   onChange={(e) => props.handleCheckBoxChecked(e, props.todoId)}/>
                
                {props.idToBeEdited === props.todoId ? (
                 <TextField
                  label={props.todoMessage}
                  onChange = {props.handleEditInputChange}
                  onKeyDown = {props.handleEditInputChange}
                  id="standard-basic" 
                   />
                ) : (
                  <ListItemText
                  onDoubleClick = {() => props.setIdToBeEdited(props.todoId)} 
                  primary ={props.todoMessage}
                />
                )}
                
                <p>{props.todoDate}</p>
                 <ListItemIcon>
                    <ClearIcon
                      className="delete"
                      onClick={(e) => props.handleDeleteOne(e, props.todoId)}
                    />
                  </ListItemIcon>
                  
    </ListItem>
    );
  }