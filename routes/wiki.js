const express = require("express");
const wikiRouter = express.Router();
const { addPage } = require("../views");

//routes for /wiki

wikiRouter.get("/", (req, res, next) => {
  console.log("get for main wiki");
  res.send("hi");
});

wikiRouter.post("/", (req, res, next) => {
  console.log("post for main wiki");
  res.send("hi1");
});

wikiRouter.get("/add", (req, res, next) => {
  console.log("get for add");
  res.send(addPage());
});

module.exports = wikiRouter;

// var express = require('express')
// var app = express()
// var router = express.Router()
