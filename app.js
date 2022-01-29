"use strict";
//jshint esversion:6

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/",async function (req,res) {
    res.render("index")
});

app.get("/consultancy_project",async function(req,res){
    res.render("consultancy projects")
});

app.get("/faculty_training",async function(req,res){
    res.render("faculty_training")
});

app.get("/inhouse_project",async function(req,res){
    res.render("inhouse project")
});

app.get("/invited_talks",async function(req,res){
    res.render("invited talks")
});

app.get("/patents",async function(req,res){
    res.render("patents")
});

app.get("/publications",async function(req,res){
    res.render("publications")
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000");
  });