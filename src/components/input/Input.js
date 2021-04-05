import TextField from "@material-ui/core/TextField";
import React from "react";

export default function Input(props) {
  const handleInputChange = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.trim() === "") {
        alert("Поле пусто");
      } else {
        e.preventDefault();
        props.handleSubmit(e);
        props.setInput("");
        e.target.value = "";
      }
    } else {
      props.setInput(e.target.value);
    }
  };
  return (
    <TextField
      onChange={handleInputChange}
      onKeyPress={handleInputChange}
      id="outlined-basic"
      label="Things to be done"
      variant="outlined"
    />
  );
}
