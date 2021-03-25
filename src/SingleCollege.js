import React, {useState} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";

function SingleCollege(props){
  const [singleCollege, setsingleCollege] = useState(null); //This will fetch from the API of an individual college

  const fetchData = async () => {
    const response = await axios.get(`{/college/${props.id}}`);
    setsingleCollege(response.data);
  };

  <div className="singleCollege">
  {
    //Mapping through the data-items of only the clicked college
    singleCollege && singleCollege.map((institute, index) => {

      //Projecting the data regarding only the clicked college
      return(
        <div>
          <p><strong>ID:</strong> {institute._id}</p>
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
    })
  }
  </div>
}

export default SingleCollege;
