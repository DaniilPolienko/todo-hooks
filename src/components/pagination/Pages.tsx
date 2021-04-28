import Pagination from "@material-ui/lab/Pagination";
import React from "react";
import "./pages.css";
import type {RootState, AppDispatch} from '../../redux/store'
import {useDispatch, useSelector} from 'react-redux'


interface Props { 
    changePage: (e: any, page: number) => void
    count: number

}
export default function Pages({ changePage, count }: Props) {
  const pageAmount = useSelector((state: RootState) => state?.todo?.todo?.pages)
  return (
    <Pagination
      onChange={changePage}
      className="pages"
      count={pageAmount}
      color="primary"
    />
  );
}
