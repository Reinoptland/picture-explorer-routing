import React from "react";
import logo from "./logo.svg";
import Home from "./components/Home";
import PicturePage from "./components/PicturePage";
import PictureDetails from "./components/PictureDetails";
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
            <li>
              <Link to="/pictures">Pictures</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pictures">
            <PicturePage />
          </Route>
          <Route path="/pictures/:pictureId">
            <PictureDetails />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
