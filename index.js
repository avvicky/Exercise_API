require("dotenv").config();
const express = require("express");
const bodParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("viewengine", "ejs");
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
});

const exerciseSchema = new mongoose.Schema({
  bodyPart: String,
  equipment: String,
  gifUrl: String,
  id: String,
  name: String,
  target: String,
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

app.get("/", function (req, res) {
  res.send("Please specify the data you want");
});

app.get("/exercises", function (req, res) {
  Exercise.find(function (err, foundExercises) {
    if (!err) {
      res.send(foundExercises);
    } else {
      res.send(err);
    }
  });
});

app.get("/exercises/bodypartlist", function (req, res) {
  res.send([
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
  ]);
});

app.get("/exercises/listbybodypart/:bodypart", function (req, res) {
  const requestedbodypart = req.params.bodypart;
  Exercise.find(
    { bodyPart: { $regex: ".*" + requestedbodypart + ".*" } },
    function (err, foundExercises) {
      if (!err) {
        res.send(foundExercises);
      } else {
        res.send(err);
      }
    }
  );
});

app.get("/exercises/searchbyname/:name", function (req, res) {
  const requestedexercisename = req.params.name;

  Exercise.find(
    { name: { $regex: ".*" + requestedexercisename + ".*" } },
    function (err, foundExercises) {
      if (!err) {
        res.send(foundExercises);
      } else {
        res.send(err);
      }
    }
  );
});

app.get("/exercises/searchbyid/:id", function (req, res) {
  const requestedExerciseId = req.params.id;
  Exercise.find({ id: requestedExerciseId }, function (err, foundExercises) {
    if (!err) {
      res.send(foundExercises);
    } else {
      res.send(err);
    }
  });
});

app.get("/exercises/listoftargetmuscles", function (req, res) {
  res.send([
    "abductors",
    "abs",
    "adductors",
    "biceps",
    "calves",
    "cardiovascular system",
    "delts",
    "forearms",
    "glutes",
    "hamstrings",
    "lats",
    "levator scapulae",
    "pectorals",
    "quads",
    "serratus anterior",
    "spine",
    "traps",
    "triceps",
    "upper back",
  ]);
});

app.get("/exercises/listbytargetmuscle/:muscle", function (req, res) {
  const targetedExerciseMuscle = req.params.muscle;
  Exercise.find(
    { target: { $regex: ".*" + targetedExerciseMuscle + ".*" } },
    function (err, foundExercises) {
      if (!err) {
        res.send(foundExercises);
      } else {
        res.send(err);
      }
    }
  );
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
