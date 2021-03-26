import React, {useState} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import history from './history';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";
import "./styles.css";
import SingleCollege from "./SingleCollege";

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

  const handler = function(ID){
    return ID;
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
                  <Button size = "small" onClick = {"() => history.push('/SingleCollege'); () => handler(college._id);"}> View In Detail < /Button>
                </CardActions>
              </Card>
            </Grid>
        );
      })
    }
    </div>
  </div>
  );
  return(<SingleCollege id = {handler} />);
}

export default App;
