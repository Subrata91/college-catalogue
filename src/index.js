// This is the principal JS file that React seeks first. This will hold the main App component.

// Importing of the required libraries
import React from "react";
import ReactDOM from "react-dom";
import App from "../Components/App.js";

const rootElement = document.getElementById("root"); // This constant variable stores the "root" element present in the HTML file of this app.
ReactDOM.render(<App />, rootElement);  // Rendering of the "App" component along with the "root" element.
