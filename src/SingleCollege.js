/* This file will render the college page for each and every college card that we click upon,
and will display the full information regarding the college. */

// Importing of the required libraries
import React, {useState, useEffect} from "react";
import "./styles.css";

// This function will run and display the individual college page
function SingleCollege(props){
  useEffect(() => {   // Calling the data-fetching function through "useEffect". It is actually the Effect Hook function of React.
    fetchItem();   // The function that will fetch the complete data about a college.
  },[]);

  /* The useState function is also being used here. It will push a single college object and its parameters into the "items" via
  the "setItems" fucntion */
  const [item, setItem] = useState({});

  // The constant variable "fetchItems" holds an asynchronous function where it is fetching data using the link provided in the paranthesis.
  const fetchItem = async () => {
    const data = await fetch(`/college/${props.id}`);
    const items = await data.json();  // Conversion of the data gathered from the API link into JSON data.
    setItem(items);  // Setting the furnished data into "items" as previously stated.
  };

  // Now that the entire dataset of a college has been gathered, we are rendering it according to our fashion.
  //
  return(
    <div className="single-college">
      <p><strong>ID:</strong>{item._id}</p>
      <p><strong>Name:</strong>{item.Name}</p>
      <p><strong>Address:</strong> {item.Address}</p>
      <p><strong>Recognition:</strong> {item.Recognition}</p>
      <p><strong>Accreditation:</strong> {item.Accreditation}</p>
      <p><strong>Established:</strong> {item.Established}</p>
      <p><strong>About:</strong> {item.About}</p>
      <p><strong>Streams:</strong> {item.Streams}</p>
      <p><strong>Placements:</strong> {item.Placements}</p>
      <p><strong>Current Rankings:</strong> {item.CurrentRankings}</p>
      <p><strong>Ranking:</strong> {item.Ranking}</p>
      <p><strong>Gallery:</strong> {item.Gallery}</p>
      <p><strong>Scholarships:</strong> {item.Scholarships}</p>
      <p><strong>Faculty:</strong> {item.Faculty}</p>
      <p><strong>Facilities:</strong> {item.Facilities}</p>
      <p><strong>Contact Details:</strong> {item.Contact}</p>
    </div>
  );
}

export default SingleCollege; // Exporting the "SingleCollege" function so that it can be imported into another file and used as the programmer desires.
