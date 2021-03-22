import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";

function App() {
  const [colleges, setcolleges] = useState(null);
  const classes = useStyles();

  const fetchData = async () => {
    const response = await axios.get(
      "/colleges"
    );

    setcolleges(response.data);
  };


  <div className = "singleCollege" >
  {colleges && colleges.map((institute, index) => {
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
                  )
                }
              }

export default App;
