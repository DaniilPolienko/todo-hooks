import Pagination from '@material-ui/lab/Pagination';
import React from 'react';
import "./pages.css";

export default function Pages(props) {
    
    return (
        <Pagination
            className = "pages"
            count={props.numberOfPages} color="primary" />
    );
  }