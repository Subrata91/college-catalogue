/* This file will render the college page for each and every college card that we click upon,
and will display the full information regarding the college. */

// Importing of the required libraries
import React, {useState, useEffect} from "react";
import "./styles.css";

// This function will run and display the individual college page
function SingleCollege({ match }){
  useEffect(() => {   // Calling the data-fetching function through "useEffect". It is actually the Effect Hook function of React.
    fetchItem();   // The function that will fetch the complete data about a college.
    console.log(match);
  },[]);

  /* The useState function is also being used here. It will push a single college object and its parameters into the "items" via
  the "setItems" fucntion */
  const [item, setItem] = useState({});

  // The constant variable "fetchItems" holds an asynchronous function where it is fetching data using the link provided in the paranthesis.
  const fetchItem = async () => {
    const data = await fetch(`/college/${match.params._id}`);
    const items = await data.json();  // Conversion of the data gathered from the API link into JSON data.
    setItem(items);  // Setting the furnished data into "items" as previously stated.

    console.log(items);
  };

  // Now that the entire dataset of a college has been gathered, we are rendering it according to our fashion.
  // {item.map(info => (
  return(
    <div className="App">
      <p>
      <strong>ID:</strong>{item._id}
      <br />
      <strong>Name:</strong>{item.Name}
      <br />
      <strong>Address:</strong> {item.Address}
      <br />
      <strong>Recognition:</strong> {item.Recognition}
      <br />
      <strong>Accreditation:</strong> {item.Accreditation}
      <br />
      <strong>Established:</strong> {item.Established}
      <br />
      <strong>About:</strong> {item.About}
      <br />
      <strong>Streams:</strong> {item.Streams}
      <br />
      <strong>Placements:</strong> {item.Placements}
      <br />
      <strong>Current Rankings:</strong> {item.CurrentRankings}
      <br />
      <strong>Ranking:</strong> {item.Ranking}
      <br />
      <strong>Gallery:</strong> {item.Gallery}
      <br />
      <strong>Scholarships:</strong> {item.Scholarships}
      <br />
      <strong>Faculty:</strong> {item.Faculty}
      <br />
      <strong>Facilities:</strong> {item.Facilities}
      <br />
      <strong>Contact Details:</strong> {item.Contact}
      </p>
    </div>
  );
}

export default SingleCollege; // Exporting the "SingleCollege" function so that it can be imported into another file and used as the programmer desires.
