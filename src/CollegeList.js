// This file will render the home page i.e. the very first page, the user will see when this app loads up on the browser

// Importing of the required libraries
import React, {useState} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";
import {
  Nav1,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from "./Navbarelements";
import {Navbar, Nav, NavDropdown, Form, FormControl} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import PersonIcon from "@material-ui/icons/Person";
import SingleCollege from "./SingleCollege.js";
import "./styles.css";

// A local stylesheet being defined in a constant variable named, useStyles
const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingBottom: "40px"
  },
  root: {
    minWidth: 200
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  pos: {
    marginBottom: 12
  },
  heading: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  details: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  timestamp: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    fontSize: "7.5px",
    textAlign: "right",
    paddingTop: "10px"
  }
});

//The function that will run the home page
function CollegeList() {
  const [colleges, setcolleges] = useState(null); // "colleges" will be holding the list of colleges and "setcolleges" will be pushing the list into "colleges".
  const classes = useStyles(); // Another constant variable holds the above mentioned stylesheet

  // Operation of data fetching is taking place from the API site that holds the college list
  const fetchData = async () => {
    const response = await axios.get("/colleges");

    setcolleges(response.data); // "setcolleges" setting the acquired list of colleges into "colleges".
  };

  /* The rendering of the college list in the form of React cards where each college is represented in the form of product cards.
  Each card will display the college name and a few other credentials related to the college */
  return (
    <div className="App">
      <div className="first-navbar" style={{boxShadow: "0 5px 12px"}}>
        <Navbar
          className="color-nav"
          style={{position: "relative"}}
          collapseOnSelect
          expand="lg"
          variant="light"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <a href="/" style={{textDecoration: "none"}}>
                <h2 className="brand-name">CollegeHunt</h2>
              </a>
              <NavDropdown
                title="Select Country"
                id="collasible-nav-dropdown"
                style={{paddingLeft: "30px"}}
              >
                <NavDropdown.Item href="#"> India </NavDropdown.Item>
                <NavDropdown.Item href="#"> United States </NavDropdown.Item>
                <NavDropdown.Item href="#"> United Kingdom </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#"> Other Country </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#" style={{paddingRight: "20px"}}>
                <PersonIcon
                  style={{paddingBottom: "3px", fill: "#000"}}
                ></PersonIcon>{" "}
                Register{" "}
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="#memes"
                style={{paddingRight: "10px"}}
              >
                <FontAwesomeIcon icon={faSignInAlt} style={{color: "#000"}} />{" "}
                Sign In{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div style={{marginTop: "100px"}}>
        <h1 style={{marginBottom: "5px"}}> List of Colleges </h1>
        <h2
          style={{
            fontSize: "1rem",
            marginTop: "5px",
            marginBottom: "30px",
            opacity: ".7"
          }}
        >
          {" "}
          Click on the button below to see the entire list of registered
          colleges.{" "}
        </h2>
        {/* Fetch data from API */}
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data{" "}
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="colleges">
        {" "}
        {colleges &&
          colleges.map((college, index) => {
            const cleanedDate = new Date(college.Timestamp).toDateString();
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                className={classes.gridContainer}
              >
                <Card
                  className={classes.root}
                  variant="outlined"
                  style={{boxShadow: "0 5px 5px"}}
                >
                  <CardContent>
                    <div className="college" key={index}>
                      <div className="details">
                        <Typography
                          variant="h5"
                          component="h2"
                          className={classes.heading}
                        >
                          {college.NameoftheCollege}
                        </Typography>
                        <Typography
                          className={classes.pos}
                          color="textSecondary"
                          className={classes.details}
                        >
                          {college.RecognizedBy}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.details}
                        >
                          Address: {college.City}, {college.State}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.timestamp}
                        >
                          Data Edited on: {cleanedDate}
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                  <CardActions>
                    <Link
                      to={`/singlecollege/${college._id}`}
                      target="_blank"
                      style={{textDecoration: "none"}}
                    >
                      <Button size="small"> View In Detail </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </div>
    </div>
  );
}

export default CollegeList; // Exporting the "Home" function so that it can be imported into another file and used as the programmer desires.
