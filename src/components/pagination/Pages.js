import Pagination from "@material-ui/lab/Pagination";
import React from "react";
import "./pages.css";

export default function Pages(props) {
  return (
    <Pagination
      onChange={props.changePage}
      className="pages"
      count={Math.ceil(props.count / 5)}
      color="primary"
    />
  );
}
