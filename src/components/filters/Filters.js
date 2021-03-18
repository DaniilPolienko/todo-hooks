import Button from '@material-ui/core/Button';
import React, {useEffect} from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import "./filters.css";


export default function Filters(props) {
    const filterTodos = (filterType) => {
        const newTodos = [...props.todos]
        switch(filterType) {
          case "all":
            props.setFilteredTodos([...props.todos])
            props.setFilter("all")
      
            break;
          case "active":
            props.setFilteredTodos(newTodos.filter(item => item.checked === false))
            props.setFilter("active")
            filterTodos()

            break;
          case "done":
            props.setFilteredTodos(newTodos.filter(item=> item.checked === true))
            props.setFilter("done")
            filterTodos()

            break;
          default:
            break;
        }
      };

      function datesUp(a,b) {
        if (a.date > b.date) return -1;
        if (a.date === b.date) return 0;
        if (a.date < b.date) return 1;
      }

      function datesDown(a,b) {
        if (a.date > b.date) return 1;
        if (a.date === b.date) return 0;
        if (a.date < b.date) return -1;
      }
      
       useEffect(() => {  
        filterTodos(props.filter);
       }, [props.todos])
    
    return (
        <div className ="filters">
          <div className = "buttons">
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
          <div className = "arrows">
            <p className = "datesort">Sort by date</p>
            <ArrowUpwardIcon
              onClick = {()=> props.setFilteredTodos([...props.filteredTodos.sort(datesUp)])}
              className ="arrow"/>
            <ArrowDownwardIcon
              onClick = {()=> props.setFilteredTodos([...props.filteredTodos.sort(datesDown)])}
              className ="arrow"/>
          </div>
        </div>
    );
  }