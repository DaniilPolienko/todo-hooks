import TextField from "@material-ui/core/TextField";
import React from "react";

export default function Input({ handleSubmit, setInput, setError, setOpen }) {
  const handleInputChange = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.trim() === "") {
        setError("Поле пусто");
        setOpen(true);
      } else {
        e.preventDefault();
        handleSubmit(e);
        setInput("");
        e.target.value = "";
      }
    } else {
      setInput(e.target.value);
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
