const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/NewCollegeDbb", {
  useNewUrlParser: true
});

const CollegeSchema = {
  _id: mongoose.Schema.ObjectId,
};

const College = mongoose.model("College", CollegeSchema, 'CollegeCollection');

// Requests targetting all the colleges

app.route("/colleges")

  .get(function(req, resp) {
    College.find(function(err, foundColleges) {
      if (!err) {
        resp.send(foundColleges);
      } else {
        resp.send(err);
      }

    });
  });


// TODO

app.listen(process.env.PORT || 5000, function() {
  console.log("Server started on port 5000.");
});
