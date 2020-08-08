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
import { Component } from 'react';
class Apps extends Component {
    constructor(props) {
        super(props);
        this.MYURL = "http://localhost:3000";
    }

    handle_login = (e, data) => {
        alert("sssss");
        e.preventDefault();
        fetch(this.MYURL + '/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                localStorage.setItem('token', json.token);
                this.setState({
                    logged_in: true,
                    displayed_form: '',
                    username: json.user.username
                });
            });
    };
}

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


