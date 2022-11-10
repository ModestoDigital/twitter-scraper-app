"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const { TwitterApi } = require("twitter-api-v2");
const cors = require("cors");
require("dotenv/config");

const Client = new TwitterApi({
  appKey: process.env.appKey,
  appSecret: process.env.appSecret,
  accessToken: process.env.accessToken,
  accessSecret: process.env.accessSecret,
});

const token = process.env.token;

const app = express();

app.use(bodyParser.json());
//app.use(express.json());
app.use(cors());
//Routes

let tweets = [];

app.get("/", (req, res) => {
  res.status(200).json({ success: "true" });
});

app.get("/getCuratedTweets", (req, res) => {
  //console.log(tweets);
  res.status(200).json(tweets);
});

app.delete("/resetTweets", (req, res) => {
  tweets = [];
  res.status(200).json({ msg: "tweets deletd" });
});

app.post("/removeTweet", (req, res) => {
  const id = req.body.id;
  const filtered = tweets.filter((tweet) => !(tweet.id === id));
  tweets = filtered;
  res.status(200).json({ msg: "ok" });
});

app.post("/addTweet", (req, res) => {
  const data = req.body;
  //console.log(data);
  if (data) {
    tweets = [data, ...tweets];
    res.status(200).json({ msg: "ok" });
  } else {
    res.status(400).json({ msg: "missing data" });
  }
});

app.get("/search", async (req, res) => {
  try {
    const hashtag = req.query.q;

    Client.v2
      .search(`#${hashtag}`, {
        "tweet.fields": ["author_id", "created_at", "text"],
        expansions: ["author_id"],
        "user.fields": ["id", "name", "profile_image_url"],
      })
      .then((data) => {
        //console.log(data);
        const info = {
          tweets: data.data.data,
          users: data.data.includes.users,
        };
        let response = [];
        info.tweets.forEach((tweet, index) => {
          let ntweet = tweet;
          ntweet.user = info.users[index];
          response.push(ntweet);
        });
        res.status(200).json(response);
      });
  } catch (error) {
    console.log(error);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backservices Runnig on port ${PORT}`);
});
