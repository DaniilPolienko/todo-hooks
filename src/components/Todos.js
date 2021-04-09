import List from "@material-ui/core/List";
import React, { useState, useEffect } from "react";
import Input from "./input/Input";
import Filters from "./filters/Filters";
import Li from "./listitem/Li";
import Pages from "./pagination/Pages";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import Link from "@material-ui/core/Link";
import "./Styles.css";

export default function Todos(props) {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(null);
  const [idToBeEdited, setIdToBeEdited] = useState(-1);
  const [editedMessage, setEditedMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [order, setOrder] = useState("asc");
  const [count, setCount] = useState(1);
  const API_URL_GET = process.env.REACT_APP_API_GET;
  const handleSubmit = (e) => {
    makePostRequest();
  };

  const handleDeleteOne = (e, index) => {
    const itemToBeDeleted = todos.find((el) => el.id === index);
    console.log(itemToBeDeleted);
    makeDeleteRequest(itemToBeDeleted);
  };

  const handleCheckBoxChecked = (e, index) => {
    const newTodos = [...todos];
    const currentTodo = newTodos.find((el) => el.id === index);
    currentTodo.checked = e.target.checked;

    checkTask(currentTodo, e.target.checked);
    setTodos([...newTodos]);
  };

  const handleEditInputChange = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.trim() === "") {
        alert("Поле пусто");
      } else {
        e.preventDefault();
        handleSubmitEdited();
      }
    } else {
      if (e.key === "Escape") {
        setIdToBeEdited(-1);
      } else {
        setEditedMessage(e.target.value);
      }
    }
  };

  const handleSubmitEdited = () => {
    const newTodos = [...todos];
    const currentTodo = newTodos.find((el) => el.id === idToBeEdited);
    currentTodo.message = editedMessage;

    editTask(currentTodo, editedMessage, "name");
    setIdToBeEdited(-1);
  };

  const changePage = (e, page) => {
    setCurrentPage(page);
  };

  async function getTasks() {
    try {
      const { data } = await axios.get(API_URL_GET, {
        params: {
          page: currentPage,
          filter: filter,
          sort: order,
        },
      });
      console.log(data);
      setTodos(
        data.rows.map((item, index) => ({
          id: index,
          message: item.message,
          checked: item.done,
          date: item.createdAt,
          uuid: item.id,
        }))
      );
      console.log(data.count);
      setCount(data.count);
    } catch (err) {
      setOpen(true);
      setError(err.toString());
    }
  }

  async function makePostRequest() {
    try {
      const task = { message: input };
      await axios.post(process.env.REACT_APP_API + "/item", task);
      getTasks(currentPage);
      setOpen(false);
    } catch (err) {
      setOpen(true);
      setError(err.toString());
    }
  }

  async function makeDeleteRequest(itemToBeDeleted) {
    try {
      await axios.delete(
        process.env.REACT_APP_API + "/item/" + itemToBeDeleted.uuid
      );

      getTasks(currentPage);
    } catch (err) {
      setOpen(true);
      setError(err.toString());
    }
  }

  async function checkTask(task, state) {
    try {
      await axios.patch(process.env.REACT_APP_API + "/item/" + task.uuid, {
        done: state,
      });
      getTasks(currentPage);
    } catch (err) {
      setOpen(true);
      setError(err.toString());
    }
  }

  async function editTask(task, state) {
    try {
      await axios.patch(process.env.REACT_APP_API + "/item/" + task.uuid, {
        message: state,
      });
    } catch (err) {
      setOpen(true);
      setError(err.toString());
    }
  }

  useEffect(() => {
    getTasks(currentPage);
  }, [currentPage, filter, order]);

  return (
    <>
      <Link className="logout" href="/auth" variant="body2">
        {"Log out"}
      </Link>
      <Input handleSubmit={handleSubmit} setInput={setInput} />
      <Filters
        filter={filter}
        setOrder={setOrder}
        getTasks={getTasks}
        setFilter={setFilter}
      />

      <List>
        {todos.map((todo) => (
          <Li
            todo={todo}
            handleCheckBoxChecked={handleCheckBoxChecked}
            idToBeEdited={idToBeEdited}
            handleEditInputChange={handleEditInputChange}
            setIdToBeEdited={setIdToBeEdited}
            handleDeleteOne={handleDeleteOne}
            key={todo.id}
          />
        ))}
      </List>

      <Pages changePage={changePage} count={count} />

      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </>
  );
}
