import Pagination from '@material-ui/lab/Pagination';
import React, {useState, useEffect} from 'react';
import "./pages.css";

export default function Pages(props) {
    const [currentPage, setCurrentPage] = useState(1)

    const handleRender = (page) =>{
        console.log(page)
        const newTodos = [...props.todos]
        props.setFilteredTodos(newTodos.slice((page - 1) * 5, (page - 1) * 5 + 5))
    }

    const changePage = (e, page) => {
        setCurrentPage(page)
    }




    return (
        <Pagination
            onChange = {changePage}
            onChange = {handleRender(currentPage)}
            className = "pages"
            count={Math.ceil(props.todos.length / 5)} 
            color="primary" />
            
    );
  }