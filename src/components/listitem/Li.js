import ListItemText from "@material-ui/core/ListItemText";
import { Checkbox } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ClearIcon from "@material-ui/icons/Clear";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";

import "./listitem.css";

export default function Li({
  todo,
  handleEditInputChange,
  setIdToBeEdited,
  handleDeleteOne,
  handleCheckBoxChecked,
  idToBeEdited,
}) {
  return (
    <ListItem className="listitem" divider>
      <Checkbox
        checked={todo.checked}
        onChange={(e) => handleCheckBoxChecked(e, todo.id)}
      />

      {idToBeEdited === todo.id ? (
        <TextField
          label={todo.message}
          onChange={handleEditInputChange}
          onKeyDown={handleEditInputChange}
          id="standard-basic"
        />
      ) : (
        <ListItemText
          onDoubleClick={() => setIdToBeEdited(todo.id)}
          primary={todo.message}
        />
      )}

      <p>{todo.date}</p>
      <ListItemIcon>
        <ClearIcon
          className="delete"
          onClick={(e) => handleDeleteOne(e, todo.id)}
        />
      </ListItemIcon>
    </ListItem>
  );
}
