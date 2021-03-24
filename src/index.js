import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from "./components/Home";
import Menu from "./components/Menu";
import App from "./components/App";

ReactDOM.render(
    <Router>
        <Menu />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/app' component={App} />
        </Switch>
    </Router>,
    document.getElementById("root")
);
