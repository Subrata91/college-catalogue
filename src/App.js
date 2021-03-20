// import React, {useState} from "react";
// import axios from "axios";
// import "./styles.css";
// import Card from "./Card";
// import { Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
//
// const useStyles = makeStyles({
//   gridContainer: {
//     paddingLeft: "40px",
//     paddingRight: "40px"
//   }
// });
//
// async function getColleges() {
//   await fetch("/colleges")
//     .then((response) => response.json());
// }
//
// const CollegesArray = getColleges();
// var size = Object.keys(CollegesArray).length;
//
// export default function App() {
//   const classes = useStyles();
//   for(var i = 0; i < size; i++)
//   {
//     return (
//       <Grid container spacing={4} className={classes.gridContainer} justify="center">
//         <Grid item xs={12} sm={6} md={4}><Card /></Grid>
//       </Grid>
//     );
//   }
// }
