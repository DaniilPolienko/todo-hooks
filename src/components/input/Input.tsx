import TextField from "@material-ui/core/TextField";
import React, { useDebugValue } from "react";
import { Dispatch, SetStateAction } from "react";
import { useDispatch } from 'react-redux'

interface Props { 
    handleSubmit: () => void
    setInput: Dispatch<SetStateAction<string>>
    setError: Dispatch<SetStateAction<string>>
    setOpen: Dispatch<SetStateAction<boolean>>

}
export default function Input({ handleSubmit, setInput, setError, setOpen } : Props) {

  const dispatch = useDispatch()

  const handleInputChange = (e: any) => {
    if (e.key === "Enter") {
      if (e.target.value.trim() === "") {
        setError("Поле пусто");
        setOpen(true);
      } else {
        e.preventDefault();
        handleSubmit();
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
