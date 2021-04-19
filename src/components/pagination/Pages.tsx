import Pagination from "@material-ui/lab/Pagination";
import React from "react";
import "./pages.css";

interface Props { 
    changePage: (e: any, page: number) => void
    count: number

}
export default function Pages({ changePage, count }: Props) {
  return (
    <Pagination
      onChange={changePage}
      className="pages"
      count={Math.ceil(count / 5)}
      color="primary"
    />
  );
}
