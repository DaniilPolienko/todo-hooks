import List from "@material-ui/core/List";
import React, { useState, useEffect } from "react";
import Input from "./input/Input";
import Filters from "./filters/Filters";
import Li from "./listitem/Li";
import Pages from "./pagination/Pages";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { useDispatch } from 'react-redux'
import Button from "@material-ui/core/Button";
import {getTodos} from '../redux/todoSlice'
import "./Styles.css";
import { Redirect } from "react-router";

export interface todoInterface {
    message?: string,
    done?: boolean,
    createdAt?: string,
    id: string,
    uuid?: string,
}

export enum sortEnum{
    asc = "asc",
    desc = "desc"
}

export default function Todos() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<todoInterface[]>([]);
  const [filter, setFilter] = useState<boolean | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [order, setOrder] = useState(sortEnum.asc);
  const [count, setCount] = useState(1);
  const [redirect, setRedirect] = useState(false);
  const [name, setName] = useState("");
  const dispatch = useDispatch()
  const jwt = require("jsonwebtoken");
  const token = localStorage.getItem("token");
  axios.defaults.baseURL = process.env.REACT_APP_API;
  axios.defaults.headers.common["Authorization"] = token;

 
  const handleSubmit = () => {
    makePostRequest();
  };

  const handleDelete = async (id: string) => {
    await axios({
      method: "delete",
      url: "/item",
      params: { id },
    });
    getTasks();
  };

  const handleCheckBoxChecked = (e:any, todo: todoInterface) => {
    const newTodos = [...todos];
    const currentTodo = newTodos.find((el: todoInterface) => el.id === todo.id);
    if(currentTodo) {
        currentTodo.done = e.target.checked;
    }
    editTask(todo);
    setTodos([...newTodos]);
  };

  const handleSubmitCard = (todo: todoInterface) => {
    const newTodos = [...todos];
    const currentTodo = newTodos.find((el:todoInterface) => el.id === todo.id);
    if(currentTodo) {
        currentTodo.message = todo.message;
    }

    editTask(todo);
    setTodos([...newTodos]);
  };

  const changePage = (e:any, page: number) => {
    setCurrentPage(page);
  };

  async function getTasks() {
    const { data } = await axios({
        method: "get",
        url: "/items",
        params: {
            page: currentPage,
            filter: filter,
            sort: order,
        },
      });
    setTodos(
      data.rows.map((item : todoInterface) => ({
        message: item.message,
        done: item.done,
        createdAt: item.createdAt,
        id: item.id,
        uuid: item.uuid,
      }))
    );
    dispatch(
      getTodos(
        data.rows.map((item : todoInterface) => ({
        message: item.message,
        done: item.done,
        createdAt: item.createdAt,
        id: item.id,
        uuid: item.uuid,
      })))
    )
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
    getTasks();
    setOpen(false);
  }

  async function editTask(task: todoInterface) {
    try {
      await axios({
        method: "patch",
        url: "/item",
        data: {
          task,
        },
      });
      getTasks();
    } catch (error) {
      getTasks();
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
          error.response.data.error === "Access Denied" ||
          error.response.data.error === "jwt malformed"
        ) {
          setRedirect(true);
        }
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    getTasks();
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
    localStorage.removeItem("token");
    return <Redirect to="/auth" />;
  }
  return (
    <>
      <div className="logout">
        <p>{name}</p>
        <Button onClick={() => setRedirect(true)}>
          {"Log out"}
        </Button>
      </div>
      <Input
        handleSubmit={handleSubmit}
        setInput={setInput}
        setError={setError}
        setOpen={setOpen}
      />
      <Filters
        filter={filter}
        setOrder={setOrder}
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
      {(currentPage === 1) && (count < 6) ? (
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
