import Button from '@material-ui/core/Button';
import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import "./filters.css";


export default function Filters(props) {
   


      
    return (
        <div className ="filters">
          <div className = "buttons">
            <Button
            onClick = {() => props.filterTodos("all")}
            variant={props.filter === "all" ? "outlined" : "text"}
            color="primary">All</Button>
            <Button
            onClick = {() =>props.filterTodos("active")}
            variant={props.filter === "active" ? "outlined" : "text"}
            color="primary">Active</Button>
            <Button
            onClick = {() =>props.filterTodos("done")}
            variant={props.filter === "done" ? "outlined" : "text"} 
            color="primary">Done</Button>
          </div>
          <div className = "arrows">
            <p className = "datesort">Sort by date</p>
            <ArrowUpwardIcon
              onClick = {() => props.setOrder("desc")}
              className ="arrow"/>
            <ArrowDownwardIcon
                onClick = {() => props.setOrder("asc")}
              className ="arrow"/>
          </div>
        </div>
    );
  }