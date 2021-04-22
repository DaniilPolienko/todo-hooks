import React, { useState } from "react";
import ListItemText from "@material-ui/core/ListItemText";
import { Checkbox } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ClearIcon from "@material-ui/icons/Clear";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import "./listitem.css";
import { todoInterface } from "../Todos";
import {useDispatch} from 'react-redux'
import {toggleComplete} from '../../redux/todoSlice'
import { compose } from "redux";


interface Props { 
    todo: todoInterface
    handleSubmitCard: (task:todoInterface) => void
    handleDelete:(id: string) => void
    handleCheckBoxChecked: (e: React.ChangeEvent<HTMLInputElement>, task: todoInterface ) => void
}
export default function Li({todo, handleSubmitCard, handleDelete, handleCheckBoxChecked}:Props) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch()

  const handleEditInputChange = (e: any) => {
    if (e.key === "Enter") {
      if (e.target.value.trim() === "") {
        return alert("Поле пусто");
      } else {
        e.preventDefault();
        setIsEditing(false);
        return handleSubmitCard({ id: todo.id, message: e.target.value });
      }
    }
    if (e.key === "Escape") setIsEditing(false);
  };

  const handleCompleteClick = () => {
    dispatch(
      toggleComplete({id: todo.id, done: !todo.done})
    )
  }
  return (
    <ListItem className="listitem" divider>
      <Checkbox
        checked={todo.done}
        onChange={(e) =>
          handleCheckBoxChecked(e, { id: todo.id, done: e.target.checked })
        }
      />

      {isEditing ? (

            <TextField
                autoFocus
                onBlur={() => setIsEditing(false)}
                label={todo.message}
                onChange={handleCompleteClick}
                onKeyDown={(e) => handleEditInputChange(e)}
                id="standard-basic"
            />
      ) : (
        <ListItemText
          onDoubleClick={() => setIsEditing(true)}
          primary={todo.message}
        />
      )}

      <p>{todo.createdAt}</p>
      <ListItemIcon>
        <ClearIcon className="delete" onClick={(e) => handleDelete(todo.id)} />
      </ListItemIcon>
    </ListItem>
  );
}
