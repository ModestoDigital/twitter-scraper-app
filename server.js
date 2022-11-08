"use strict";
const express = require("express");
const bp = require("body-parser");

const app = express();

app.use(bp.json());

//Routes

let tweets = [];

app.get("/", (req, res) => {
  res.status(200).json({ success: "true" });
});

app.get("/getCuratedTweets", (req, res) => {
  res.status(200).json(tweets);
});

app.delete("/resetTweets", (req, res) => {
  tweets = [];
  res.status(200).json({ msg: "tweets deletd" });
});

app.post("/addTweet", (req, res) => {
  const data = req.body;
  tweets = [data, ...tweets];
  res.status(200).json({ msg: "sucess" });
});

app.post("/removeTweet", (req, res) => {
  const id = req.body.id;
  const newlist = tweets.filter((twt) => twt.id !== id);
  tweets = newlist;
  res.status(200).json({ msg: "sucess" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backservices Runnig on port ${PORT}`);
});
