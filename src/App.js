import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Distraint from "./components/Distraint";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/' component={Distraint} />
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
