import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css'
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Header from "components/comps/Header";
import Footer from "components/comps/Footer";
import Slide from "components/comps/slide";
import Login from "components/comps/login";
import Register from "components/comps/register";
import Profile from "components/comps/profile";

ReactDOM.render(
    <div>

        <Header/>
        <Slide/>
        <Login/>
        <Register/>
        <Profile/>


 <Footer />
    </div>
    ,


    document.getElementById('root')
);


