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

mongoose.connect("mongodb://localhost:27017/CollegeDb", {
  useNewUrlParser: true
});

const CollegeSchema = {
  _id: mongoose.Schema.ObjectId,
};

const College = mongoose.model("College", CollegeSchema, 'myCollection');

// Requests targetting a single college

app.route("/college/:collegeId")

  .get(function(req, resp) {

    College.findOne({
      _id: req.params.collegeId
    }, function(err, foundCollege) {
      if (foundCollege) {
        resp.send(foundCollege);
      } else {
        resp.send("No articles matching that title was found.");
      }
    });
  })


// TODO

app.listen(process.env.PORT || 7000, function() {
  console.log("Server started on port 7000.");
});
