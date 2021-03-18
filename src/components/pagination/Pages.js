import Pagination from '@material-ui/lab/Pagination';
import React, {useState, useEffect} from 'react';
import "./pages.css";

export default function Pages(props) {
    const [currentPage, setCurrentPage] = useState(1)

    const handleRender = (e, page) =>{
        const newTodos = [...props.todos]
        props.setFilteredTodos(newTodos.slice((page - 1) * 5, (page - 1) * 5 + 5))
    }


    return (
        <Pagination
            onChange = {handleRender}
            className = "pages"
            count={Math.ceil(props.todos.length / 5)} 
            color="primary" />
            
    );
  }