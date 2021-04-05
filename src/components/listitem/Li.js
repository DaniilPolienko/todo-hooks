import ListItemText from "@material-ui/core/ListItemText";
import { Checkbox } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ClearIcon from "@material-ui/icons/Clear";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";

import "./listitem.css";

export default function Li(props) {
  return (
    <ListItem className="listitem" divider>
      <Checkbox
        checked={props.todo.checked}
        onChange={(e) => props.handleCheckBoxChecked(e, props.todo.id)}
      />

      {props.idToBeEdited === props.todo.id ? (
        <TextField
          label={props.todo.message}
          onChange={props.handleEditInputChange}
          onKeyDown={props.handleEditInputChange}
          id="standard-basic"
        />
      ) : (
        <ListItemText
          onDoubleClick={() => props.setIdToBeEdited(props.todo.id)}
          primary={props.todo.message}
        />
      )}

      <p>{props.todo.date}</p>
      <ListItemIcon>
        <ClearIcon
          className="delete"
          onClick={(e) => props.handleDeleteOne(e, props.todo.id)}
        />
      </ListItemIcon>
    </ListItem>
  );
}
