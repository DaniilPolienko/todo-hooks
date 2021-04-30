import List from "@material-ui/core/List";
import React, { useState, useEffect } from "react";
import Input from "./input/Input";
import Filters from "./filters/Filters";
import Li from "./listitem/Li";
import Pages from "./pagination/Pages";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Button from "@material-ui/core/Button";
import ListItemText from "@material-ui/core/ListItemText";
import { Checkbox } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ClearIcon from "@material-ui/icons/Clear";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import "./Styles.css";
import { Redirect } from "react-router";

export interface todoInterface {
  message?: string;
  done?: boolean;
  createdAt?: string;
  id: string;
  uuid?: string;
}

export enum sortEnum {
  asc = "asc",
  desc = "desc",
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
  const jwt = require("jsonwebtoken");
  const token = localStorage.getItem("token");
  const [isEditing, setIsEditing] = useState(false);
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

  const handleCheckBoxChecked = (e: any, todo: todoInterface) => {
    const newTodos = [...todos];
    const currentTodo = newTodos.find((el: todoInterface) => el.id === todo.id);
    if (currentTodo) {
      currentTodo.done = e.target.checked;
    }
    editTask(todo);
    setTodos([...newTodos]);
  };

  const handleEditInputChange = (e: any, todo: todoInterface) => {
    if (e.key === "Enter") {
      if (e.target.value.trim() === "") {
        return alert("Поле пусто");
      } else {
        e.preventDefault();
        setIsEditing(false);
        return handleSubmitCard({ id: todo.id, message: e.target.value });
      }
    }
    if (e.key === "Escape") setIsEditing(false);
  };

  const handleSubmitCard = (todo: todoInterface) => {
    const newTodos = [...todos];
    const currentTodo = newTodos.find((el: todoInterface) => el.id === todo.id);
    if (currentTodo) {
      currentTodo.message = todo.message;
    }

    editTask(todo);
    setTodos([...newTodos]);
  };

  const changePage = (e: any, page: number) => {
    setCurrentPage(page);
  };
  const handleOnDragEnd = (result: any) => {
    console.log(result);
    if (!result.destination) return;
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTodos(items);
    dragTask(result.source.index, result.destination.index);
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
      data.rows.map((item: todoInterface) => ({
        message: item.message,
        done: item.done,
        createdAt: item.createdAt,
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
    getTasks();
    setOpen(false);
  }

  async function dragTask(source: number, destination: number) {
    await axios({
      method: "patch",
      url: "/item",
      data: {
        source,
        destination,
      },
    });
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
        <Button onClick={() => setRedirect(true)}>{"Log out"}</Button>
      </div>
      <Input
        handleSubmit={handleSubmit}
        setInput={setInput}
        setError={setError}
        setOpen={setOpen}
      />
      <Filters filter={filter} setOrder={setOrder} setFilter={setFilter} />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <List {...provided.droppableProps} ref={provided.innerRef}>
              {todos.map((todo, index) => (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                  {(provided) => (
                    <ListItem
                      className="listitem"
                      divider
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <Checkbox
                        checked={todo.done}
                        onChange={(e) =>
                          handleCheckBoxChecked(e, {
                            id: todo.id,
                            done: e.target.checked,
                          })
                        }
                      />

                      {isEditing ? (
                        <TextField
                          autoFocus
                          onBlur={() => setIsEditing(false)}
                          label={todo.message}
                          onChange={(e) => handleEditInputChange(e, todo)}
                          onKeyDown={(e) => handleEditInputChange(e, todo)}
                          id="standard-basic"
                        />
                      ) : (
                        <ListItemText
                          onDoubleClick={() => setIsEditing(true)}
                          primary={todo.message}
                        />
                      )}

                      <p>{todo.createdAt}</p>
                      <ListItemIcon>
                        <ClearIcon
                          className="delete"
                          onClick={(e) => handleDelete(todo.id)}
                        />
                      </ListItemIcon>
                    </ListItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
      {currentPage === 1 && count < 6 ? (
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
