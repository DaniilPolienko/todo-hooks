import React, {useState, useEffect} from 'react'
import Todos from './components/Todos.js'
import Auth from './components/Auth.js'
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import './components/Styles.css'


function App(props) {

  return (
      <Router>
          <Redirect exact to='/auth'/>
        <section className="section">
            <Switch>
                <Route exact path="/">
                    <Todos/>
                </Route>
                <Route path="/auth">
                    <Auth/>
                </Route>
            </Switch>
        </section>
      </Router>
  );
}


export default App;
