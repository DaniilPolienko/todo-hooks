import React, { useEffect } from "react";
import Todos from "./components/Todos.js";
import Auth from "./components/Auth.js";
import SignUp from "./components/SignUp.js";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import "./components/Styles.css";
const jwt = require("jsonwebtoken");

function App(props) {
  const token = localStorage.getItem("token");
  const decoded = jwt.decode(token, { complete: true });
  const expireTime = decoded.payload.exp;
  const currentTime = Math.floor(Date.now() / 1000);

  return (
    <Router>
      {currentTime > expireTime ? <Redirect to="/auth" /> : <div></div>}
      <section className="section">
        <Switch>
          <Route exact path="/">
            <Todos />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/todo-hooks">
            <Auth />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </section>
    </Router>
  );
}
export default App;
