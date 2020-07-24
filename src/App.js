import React from "react";
import logo from "./logo.svg";
import Home from "./components/Home";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
