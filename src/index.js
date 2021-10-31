import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Display from "./components/Display";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/display" component={Display} />
      </Switch>
    </Router>
  );
};
ReactDOM.render(<Routing />, document.getElementById("root"));

reportWebVitals();
