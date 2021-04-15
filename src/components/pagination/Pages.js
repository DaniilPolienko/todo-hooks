import Pagination from "@material-ui/lab/Pagination";
import React from "react";
import "./pages.css";

export default function Pages({ changePage, count }) {
  return (
    <Pagination
      onChange={changePage}
      className="pages"
      count={Math.ceil(count / 5)}
      color="primary"
    />
  );
}
