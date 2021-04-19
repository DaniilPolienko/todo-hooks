import React from "react";
import {
  HashRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";
import SignUp from "./components/Signup";
import "./components/Styles.css";
import Todos from "./components/Todos";

function App() {
  return (
    <HashRouter basename="/todo-hooks">
      <Router>
        <section className="section">
          <Switch>
            <Route exact path="/todo-hooks">
              <Todos />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route> 
          </Switch>
        </section>
      </Router>
    </HashRouter>
  );
}
export default App;
