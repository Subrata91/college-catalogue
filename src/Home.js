// This file will render the home page i.e. the very first page, the user will see when this app loads up on the browser

// Importing of the required libraries
import React, {useState} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";
import SingleCollege from "./SingleCollege.js";
import "./styles.css";

// A local stylesheet being defined in a constant variable named, useStyles
const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  },
  root: {
    minWidth: 200
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

//The function that will run the home page
function Home() {
  const [colleges, setcolleges] = useState(null); // "colleges" will be holding the list of colleges and "setcolleges" will be pushing the list into "colleges".
  const classes = useStyles();  // Another constant variable holds the above mentioned stylesheet

  // Operation of data fetching is taking place from the API site that holds the college list
  const fetchData = async () => {
    const response = await axios.get(
      "/colleges"
    );

    setcolleges(response.data); // "setcolleges" setting the acquired list of colleges into "colleges".
  };

  /* The rendering of the college list in the form of React cards where each college is represented in the form of product cards.
  Each card will display the college name and a few other credentials related to the college */
  return (
    <div className = "App" >
    <h1 > List of Colleges < /h1>
    <h2 > Fetch a list from an API and display it < /h2>

    {/* Fetch data from API */}
    <div >
    <button className = "fetch-button" onClick = {fetchData} >
    Fetch Data
    </button>
    <br / >
    </div>

    {/* Display data from API */ }
    <div className = "colleges" >
    {colleges && colleges.map((college, index) => {
        const cleanedDate = new Date(college.Timestamp).toDateString();

        return (
            <Grid item xs = {12} sm = {6} md = {4} >
              <Card className = {classes.root} variant = "outlined" >
                <CardContent >
                  <div className = "college" key = {index} >
                    <Typography className = {classes.title} color = "textSecondary" gutterBottom >
                      College {index + 1}
                    </Typography>
                    <div className = "details" >
                      <Typography variant = "h5" component = "h2" >
                        {college.Name}
                      </Typography>
                      <Typography className = {classes.pos} color = "textSecondary" >
                        {college.Recognition}
                      </Typography>
                      <Typography variant = "body2" component = "p" >
                        Address: {college.Address}
                        <br / >
                        Timestamp: {cleanedDate}
                      </Typography>
                    </div>
                  </div>
                </CardContent>
                <CardActions >
                  <Link to = {`/singlecollege/${college._id}`} target="_blank" style={{ textDecoration: 'none' }}>
                    <Button size = "small" onClick = {() => (<SingleCollege id={college._id} />)}>View In Detail</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
        );
      })
    }
    </div>
  </div>
  );
}

export default Home; // Exporting the "Home" function so that it can be imported into another file and used as the programmer desires.
