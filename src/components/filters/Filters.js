import Button from '@material-ui/core/Button';
import React, {useEffect} from 'react';
import "./filters.css";


export default function Filters(props) {
    const filterTodos = (filterType) => {
        const newTodos = [...props.todos]
        switch(filterType) {
          case "all":
            props.setFilteredTodos([...props.todos])
            props.setFilter("all")
            console.log('1',props.filter)
            break;
          case "active":
            props.setFilteredTodos(newTodos.filter(item => item.checked === false))
            props.setFilter("active")
            filterTodos()
            console.log('2',props.filter)
            break;
          case "done":
            props.setFilteredTodos(newTodos.filter(item=> item.checked === true))
            props.setFilter("done")
            filterTodos()
            console.log('3', props.filter)
            break;
          default:
            break;
        }
      };
      
       useEffect(() => {
        filterTodos(props.filter);
       }, [props.todos])
    
    return (
        <div className ="buttons">
        <Button
            onClick = {() => filterTodos("all")}
            variant={props.filter === "all" ? "outlined" : "text"}
            color="primary">All</Button>
        <Button
          onClick = {() =>filterTodos("active")}
          variant={props.filter === "active" ? "outlined" : "text"}
          color="primary">Active</Button>
        <Button
          onClick = {() =>filterTodos("done")}
          variant={props.filter === "done" ? "outlined" : "text"} 
          color="primary">Done</Button>
      </div>
    );
  }