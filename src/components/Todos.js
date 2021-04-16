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

export default function Todos() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [order, setOrder] = useState("asc");
  const [count, setCount] = useState(1);
  const [redirect, setRedirect] = useState(false);
  const [name, setName] = useState("");
  const jwt = require("jsonwebtoken");
  const token = localStorage.getItem("token");
  const API_URL_GET = process.env.REACT_APP_API_GET;
  axios.defaults.baseURL = process.env.REACT_APP_API;
  axios.defaults.headers.common["Authorization"] = token;

  const handleSubmit = (e) => {
    makePostRequest();
  };

  const handleDelete = async (id) => {
    await axios({
      method: "delete",
      url: "/item",
      params: { id },
    });
    getTasks(currentPage);
  };

  const handleCheckBoxChecked = (e, todo) => {
    const newTodos = [...todos];
    const currentTodo = newTodos.find((el) => el.id === todo.id);
    currentTodo.checked = e.target.checked;

    editTask(todo);
    setTodos([...newTodos]);
  };

  const handleSubmitCard = (todo) => {
    const newTodos = [...todos];
    const currentTodo = newTodos.find((el) => el.id === todo.id);
    currentTodo.message = todo.message;

    editTask(todo);
    setTodos([...newTodos]);
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
    setTodos(
      data.rows.map((item, index) => ({
        message: item.message,
        checked: item.done,
        date: item.createdAt,
        id: item.id,
        uuid: item.uuid,
      }))
    );
    setCount(data.count);
  }

  async function makePostRequest() {
    await axios({
      method: "post",
      url: "/item",
      data: {
        message: input,
      },
    });
    getTasks(currentPage);
    setOpen(false);
  }

  async function editTask(task) {
    try {
      await axios({
        method: "patch",
        url: "/item",
        data: {
          task,
        },
      });
      getTasks(currentPage);
    } catch (error) {
      getTasks(currentPage);
    }
  }

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error) {
        setError(error.response.data.error || error.response.data.errors);
        setOpen(true);
        if (
          error.response.data.error === "jwt expired" ||
          error.response.data.error === "jwt must be provided" ||
          error.response.data.error === "Access Denied"
        ) {
          setRedirect(true);
        }
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    getTasks(currentPage);
  }, [currentPage, filter, order]);

  useEffect(() => {
    try {
      const payload = jwt.verify(token, process.env.REACT_APP_SECRET);
      setName(payload.firstName);
    } catch (error) {
      setRedirect(true);
    }
  }, []);

  if (redirect) {
    return <Redirect to="/auth" />;
  }
  return (
    <>
      <p className="logout">{name}</p>
      <Link
        className="logout"
        href="/auth"
        variant="body2"
        onClick={() => localStorage.removeItem("token")}
      >
        {"Log out"}
      </Link>
      <Input
        handleSubmit={handleSubmit}
        setInput={setInput}
        setError={setError}
        setOpen={setOpen}
      />
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
            handleSubmitCard={handleSubmitCard}
            handleDelete={handleDelete}
            key={todo.id}
          />
        ))}
      </List>
      {(currentPage === 1) & (count < 6) ? (
        <div></div>
      ) : (
        <Pages changePage={changePage} count={count} />
      )}
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
