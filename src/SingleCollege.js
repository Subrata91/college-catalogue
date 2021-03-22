import React, {useState} from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router"
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";
import "./styles.css";

function App() {
  const [singleCollege, setsingleCollege] = useState(null);

  const fetchData2 = async () => {
    const response2 = await axios.get(
      `{/college/${college._id}}`
    );
    setsingleCollege(response2.data);
  };

  return (
    <div className = "singleCollege" >
    // Mapping through each info of an individual college viz. key-value pairing
    {singleCollege && singleCollege.map((institute, index2) => {
        const cleanedDate2 = new Date(institute.Timestamp).toDateString();

                      // Displaying info of the clicked college
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

        );
      }
