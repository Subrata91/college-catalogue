// The file will represent the main application component and constitutes the two sub-components: "Home.jsx" and "SingleCollege.jsx"

// Importing of the required libraries
import React , { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home/Home.jsx";
import SingleCollege from "../Single-College/SingleCollege.jsx";

/* The "App" function brings in the "Home" and "SingleCollege" component and provides them with locating routes so that the user
can easily travel from one component to another with just one click. */
function App(){
  return(
    <Router>
      <div>
        <Switch>
          <Route path = "/" exact component = {Home} />
          <Route path = "/singlecollege" component = {SingleCollege} />
        </Switch>
      </div>
    </Router>
  );
}

export default App; // Exporting the "SingleCollege" function so that it can be imported into another file and used as the programmer desires.
