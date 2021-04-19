import Button from "@material-ui/core/Button";
import React from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { Dispatch, SetStateAction } from "react";
import "./filters.css";
import { sortEnum } from "../Todos";

interface Props { 
    setFilter: Dispatch<SetStateAction<boolean | null>>
    setOrder: Dispatch<SetStateAction<sortEnum>>
    filter: boolean | null
}
export default function Filters({ setFilter, setOrder, filter } : Props) {
  return (
    <div className="filters">
      <div className="buttons">
        <Button
          onClick={() => setFilter(null)}
          variant={filter === null ? "outlined" : "text"}
          color="primary"
        >
          All
        </Button>
        <Button
          onClick={() => setFilter(false)}
          variant={filter === false ? "outlined" : "text"}
          color="primary"
        >
          Active
        </Button>
        <Button
          onClick={() => setFilter(true)}
          variant={filter === true ? "outlined" : "text"}
          color="primary"
        >
          Done
        </Button>
      </div>
      <div className="arrows">
        <p className="datesort">Sort by date</p>
        <ArrowUpwardIcon onClick={() => setOrder(sortEnum.desc)} className="arrow" />
        <ArrowDownwardIcon onClick={() => setOrder(sortEnum.asc)} className="arrow" />
      </div>
    </div>
  );
}
