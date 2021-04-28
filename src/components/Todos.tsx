import List from "@material-ui/core/List";
import React, {useState, useEffect} from "react";
import Input from "./input/Input";
import Filters from "./filters/Filters";
import Li from "./listitem/Li";
import Pages from "./pagination/Pages";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux'
import Button from "@material-ui/core/Button";
import "./Styles.css";
import {Redirect} from "react-router";
import {deleteTodoRequest, editTodoRequest, getTodosRequest, getTodosSuccess, IState, postTodoRequest, resetAction} from "../redux/user";
import type {RootState, AppDispatch} from '../redux/store'
import CircularProgress from '@material-ui/core/CircularProgress';

export interface todoInterface {
  message?: string,
  done?: boolean,
  createdAt?: string,
  id: string,
  uuid?: string,
  updatedAt?: string,
}

export enum sortEnum {
  asc = "asc",
  desc = "desc"
}

export default function Todos() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<todoInterface[]>([]);
  const [filter, setFilter] = useState<boolean | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState(sortEnum.asc);
  const [error, setError] = useState("")
  const [redirect, setRedirect] = useState(false);
  const [name, setName] = useState("");
  const user = useSelector((state: RootState) => state?.user)
  const serverError = useSelector((state: RootState) => state?.user.error)
  const loading = useSelector((state: RootState) => state?.user.loading)
  const dispatch = useDispatch();
  const jwt = require("jsonwebtoken");
  const token = localStorage.getItem("token");
  axios.defaults.baseURL = process.env.REACT_APP_API;
  axios.defaults.headers.common["Authorization"] = token;
  console.log(user)
  const handleSubmit = () => {
    if (user?.user?.rows?.find(el => el.message === input))
      setError("Task already exists")
    else {
      dispatch(postTodoRequest(input))
    }
  };

  const handleDelete = async (id: string) => {
    dispatch(deleteTodoRequest(id))
  };

  const handleCheckBoxChecked = (e: any, todo: todoInterface) => {
    const newTodos = [...todos];
    const currentTodo = newTodos.find((el: todoInterface) => el.id === todo.id);
    if (currentTodo) {
      currentTodo.done = e.target.checked;
    }
    dispatch(editTodoRequest(todo));
    dispatch(getTodosRequest(currentPage, filter, order))
    setTodos([...newTodos]);
  };

  const handleSubmitCard = (todo: todoInterface) => {
    const newTodos = [...todos];
    const currentTodo = newTodos.find((el: todoInterface) => el.id === todo.id);
    if (currentTodo) {
      currentTodo.message = todo.message;
    }

    dispatch(editTodoRequest(todo));
    
    setTodos([...newTodos]);
  };

  const changePage = (e: any, page: number) => {
    setCurrentPage(page);
  };

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
          dispatch(resetAction())
          setRedirect(true);
        }
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    dispatch(getTodosRequest(currentPage, filter, order))
  }, [currentPage, filter, order])

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
    return <Redirect to="/auth"/>;
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
      {user && !loading && !error &&
      (
        <div>
          <List>
            {user?.user?.rows?.map((todo: todoInterface) => (
              <Li
                todo={todo}
                handleCheckBoxChecked={handleCheckBoxChecked}
                handleSubmitCard={handleSubmitCard}
                handleDelete={handleDelete}
                key={todo.id}
              />

            ))}
          </List>

        </div>
      )}
      {loading && (<CircularProgress />)}
      {(currentPage === 1) && (user?.user?.pages !== 2) ? (
        <div></div>
      ) : (
        <Pages changePage={changePage} count={user?.user?.count}/>
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
