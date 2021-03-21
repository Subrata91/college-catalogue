import React, {useState} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";
import "./styles.css";

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

function App() {
  const [colleges, setcolleges] = useState(null);
  const classes = useStyles();

  const fetchData = async () => {
    const response = await axios.get(
      "/colleges"
    );

    setcolleges(response.data);
  };

  return (
    <div className = "App" >
    <h1 > List of Colleges < /h1>
    <h2 > Fetch a list from an API and display it < /h2>

    {/* Fetch data from API */ }
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

        /* Fetch data from API consisting info regarding an individual college */
        const fetchData2 = async () => {
          const response2 = await axios.get(
            `{http:localhost:7000/college/${college._id}}`
          );
          setsingleCollege(response2.data);
        };

        return (
          // <Grid container spacing = {4} className = {classes.gridContainer} justify = "center" >
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
                  <Button size = "small" >Details< /Button>
                  <div>
                  /* Mapping through each info of an individual college viz. key-value pairing */
                  {singleCollege && singleCollege.map((institute, index2) => {
                      const cleanedDate2 = new Date(institute.Timestamp).toDateString();
                      /* Displaying info of the clicked college */
                      return(
                        <div className = "singleCollege">
                          <p><strong>ID:</strong> {institute._id}</p>
                          <p><strong>Timestamp:</strong> {cleanedDate2}</p>
                          <p><strong>Name:</strong> {institute.Name}</p>
                          <p><strong>Address:</strong> {institute.Address}</p>
                          <p><strong>Recognition:</strong> {institute.Recognition}</p>
                          <p><strong>Accreditation:</strong> {institute.Accreditation}</p>
                          <p><strong>Established:</strong> {institute.Established}</p>
                          <p><strong>About:</strong> {institute.About}</p>
                          <p><strong>Streams:</strong> {institute.Streams}</p>
                          <p><strong>Placements:</strong> {institute.Placements}</p>
                          <p><strong>Current Rankings:</strong> {institute.CurrentRankings}</p>
                          <p><strong>Ranking:</strong> {institute.Ranking}</p>
                          <p><strong>Gallery:</strong> {institute.Gallery}</p>
                          <p><strong>Scholarships:</strong> {institute.Scholarships}</p>
                          <p><strong>Faculty:</strong> {institute.Faculty}</p>
                          <p><strong>Facilities:</strong> {institute.Facilities}</p>
                          <p><strong>Contact Details:</strong> {institute.Contact}</p>
                        </div>
                      );
                    }
                  }
                  </div>
                </CardActions>
              </Card>
            </Grid>
          // </Grid>
        );
      })
    }
    </div>
  </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render( < App / > , rootElement);
