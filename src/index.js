//Importing of installed libraries and their components
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

//Styling parameters of the card-grid and its constituent cards
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


//This function performs the data fetching operation from the respective APIs
function App() {
  const [colleges, setcolleges] = useState(null); //This will fetch from the API of all the colleges
  const [singleCollege, setsingleCollege] = useState(null); //This will fetch from the API of an individual college
  const classes = useStyles(); //stores the above given stylesheet

//Fetching data about all the colleges in one process
  const fetchData = async () => {
    const response = await axios.get(
      "/colleges"
    );

    setcolleges(response.data);
  };

//Rendering of the home site
  return (
    <div className = "App" >
    <h1 > List of Colleges < /h1>
    <h2 > Fetch a list from an API and display it < /h2>

    // Fetch data from API
    <div >
    <button className = "fetch-button" onClick = {fetchData} >
    Fetch Data
    </button>
    <br / >
    </div>

    // Display data from API
    <div className = "colleges" >
    {colleges && colleges.map((college, index) => {
        const cleanedDate = new Date(college.Timestamp).toDateString();

        const fetchData2 = async (pointer) => {
          const response2 = await axios.get(
            `{/college/${colleges[pointer]._id}}`
          );

          setsingleCollege(response2.data);
        };

        //Generation of the card-grid and the cards
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
                  <Button size = "small" onClick={() => fetchData2(index)} > View In Detail < /Button> //When clicked on the button it will fetch data about only the clicked college
                  <div className="singleCollege">
                    {
                      //Mapping through the data-items of only the clicked college
                      singleCollege && singleCollege.map((institute, index) => {
                        const cleanedDate2 = new Date(institute.Timestamp).toDateString();

                        //Projecting the data regarding only the clicked college
                        return(
                          <div>
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
        );
      })
    }
    </div>
  </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(< App / >, rootElement);
