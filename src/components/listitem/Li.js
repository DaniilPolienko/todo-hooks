import React, { useState } from "react";
import ListItemText from "@material-ui/core/ListItemText";
import { Checkbox } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ClearIcon from "@material-ui/icons/Clear";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";

import "./listitem.css";

export default function Li({
  todo,
  handleSubmitCard,
  handleDelete,
  handleCheckBoxChecked,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditInputChange = (e) => {
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

  return (
    <ListItem className="listitem" divider>
      <Checkbox
        checked={todo.checked}
        onChange={(e) =>
          handleCheckBoxChecked(e, { id: todo.id, done: e.target.checked })
        }
      />

      {isEditing ? (
        <TextField
          autoFocus
          onBlur={() => setIsEditing(false)}
          label={todo.message}
          onChange={handleEditInputChange}
          onKeyDown={handleEditInputChange}
          id="standard-basic"
        />
      ) : (
        <ListItemText
          onDoubleClick={() => setIsEditing(true)}
          primary={todo.message}
        />
      )}

      <p>{todo.date}</p>
      <ListItemIcon>
        <ClearIcon className="delete" onClick={(e) => handleDelete(todo.id)} />
      </ListItemIcon>
    </ListItem>
  );
}
