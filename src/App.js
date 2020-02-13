import React from 'react';
import './App.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.css";

import Exo1 from "./exo1.jsx";
import Exo2 from "./exo2.jsx";
import Exo3 from './exo3.jsx';
import Exo4 from "./exo4.jsx";
import Exo5 from "./exo5.jsx";
import Exo6 from "./exo6.jsx";
import Exo7 from "./exo7.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

export default function App() {
  return (
    <Router>
      <div>
        <nav className="panel">
          <ul>
            <li>
              <Link to="/">Exo1</Link>
            </li>
            <li>
              <Link to="/exo2">Exo2</Link>
            </li>
            <li>
              <Link to="/exo3">Exo3</Link>
            </li>
            <li>
              <Link to="/exo4">Exo4</Link>
            </li>
            <li>
              <Link to="/exo5">Exo5</Link>
            </li>
            <li>
              <Link to="/exo6">Exo6</Link>
            </li>
            <li>
              <Link to="/exo7">Exo7</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/exo2">
            {/* <Exo2></Exo2> */}
          </Route>
          <Route path="/exo3">
            {/* <Exo3></Exo3> */}
          </Route>
          <Route path="/exo4">
            {/* <Exo4></Exo4> */}
          </Route>
          <Route path="/exo5">
            {/* <Exo5></Exo5> */}
          </Route>
          <Route path="/exo6">
            {/* <Exo6></Exo6> */}
          </Route>
          <Route path="/exo7">
            {/* <Exo7></Exo7> */}
          </Route>
          <Route path="/">
            <Exo1></Exo1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


