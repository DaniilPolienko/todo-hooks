import React from "react";
import Todos from "./components/Todos.js";
import Auth from "./components/Auth.js";
import SignUp from "./components/SignUp.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./components/Styles.css";

function App(props) {
  return (
    <Router>
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
