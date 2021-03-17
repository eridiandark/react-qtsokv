import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Management from "./components/Management";
import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/management">Management</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
			  renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/management">
            <Management name="Andrew" />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="Home">
      <h2>React pet application</h2>
      <p>Click 'Management' menu item to test functionality</p>
    </div>
  );
}
