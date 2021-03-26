import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import App from "./App";
import SingleCollege from "./SingleCollege";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/Home" component={App} />
                    <Route path="/SingleCollege" component={SingleCollege} />
                </Switch>
            </Router>
        )
    }
}
