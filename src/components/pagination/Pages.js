import Pagination from '@material-ui/lab/Pagination';
import React from 'react';
import "./pages.css";

export default function Pages(props) {


    
    return (
        <Pagination
            onChange = {props.changePage}
            className = "pages"
            count={props.countPages} 
            color="primary" />
            
    );
  }