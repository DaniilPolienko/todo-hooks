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
import { Redirect } from "react-router";

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
  const [redirect, setRedirect] = useState(false);
  const jwt = require("jsonwebtoken");
  const token = localStorage.getItem("token");
  const decoded = jwt.decode(token, { complete: true });
  const API_URL_GET = process.env.REACT_APP_API_GET;
  axios.defaults.baseURL = process.env.REACT_APP_API;
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
        message: item.message,
        checked: item.done,
        date: item.createdAt,
        id: item.id,
        uuid: item.uuid,
      }))
    );
    console.log(data.count);
    setCount(data.count);
  }

  async function makePostRequest() {
    await axios({
      method: "post",
      url: "/item",
      data: {
        message: input,
      },
      headers: {
        Authorization: token,
      },
    });
    getTasks(currentPage);
    setOpen(false);
  }

  // async function makeDeleteRequest(itemToBeDeleted) {
  //   await axios.delete(
  //     process.env.REACT_APP_API + "/item/" + itemToBeDeleted.uuid
  //   );

  async function makeDeleteRequest(itemToBeDeleted) {
    await axios({
      method: "delete",
      url: "/item",
      params: {
        id: itemToBeDeleted.id,
      },
      headers: {
        Authorization: token,
      },
    });
    getTasks(currentPage);
  }

  async function checkTask(task, state) {
    await axios.patch(process.env.REACT_APP_API + "/item/" + task.uuid, {
      done: state,
    });
    getTasks(currentPage);
  }

  async function editTask(task, state) {
    await axios.patch(process.env.REACT_APP_API + "/item/" + task.uuid, {
      message: state,
    });
  }

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error) {
        setError(error.response.data.error || error.response.data.errors);
        setOpen(true);
        if (error.response.data.error === "Token is expired") {
          setRedirect(true);
        }
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    getTasks(currentPage);
  }, [currentPage, filter, order]);

  if (redirect) {
    return <Redirect to="/auth" />;
  }
  return (
    <>
      <Link
        className="logout"
        href="/auth"
        variant="body2"
        onClick={() => localStorage.removeItem("token")}
      >
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
