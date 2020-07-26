import React from 'react';
import ReactDOM from 'react-dom';

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Components from "views/Components/Components.js";

var hist = createBrowserHistory();
ReactDOM.render(
     <Router history={hist}>
    <Switch>

      <Route path="/" component={Components} />
    </Switch>
  </Router>,


    document.getElementById('root')
);


