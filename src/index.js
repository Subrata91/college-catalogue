// This is the principal JS file that React seeks first. This will hold the main App component.

// Importing of the required libraries
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.js";

const rootElement = document.getElementById("root"); // This constant variable stores the "root" element present in the HTML file of this app.
ReactDOM.render(
  <Router>
    <App />
  </Router>, rootElement);  // Rendering of the "App" component along with the "root" element.
