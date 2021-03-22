import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import SingleCollege from "./SingleCollege";
import "./index"
import history from "./history";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/SingleCollege" component={SingleCollege} />
                </Switch>
            </Router>
        )
    }
}
