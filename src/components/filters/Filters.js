import Button from "@material-ui/core/Button";
import React from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import "./filters.css";

export default function Filters({ setFilter, setOrder, filter }) {
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
        <ArrowUpwardIcon onClick={() => setOrder("desc")} className="arrow" />
        <ArrowDownwardIcon onClick={() => setOrder("asc")} className="arrow" />
      </div>
    </div>
  );
}
