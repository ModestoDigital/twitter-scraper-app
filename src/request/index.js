import twt from "../connection_info";
import axios from "axios";

const url = "http://localhost:5000/";

//gets tweets from a hashtag
const twitGetter = async (hashtag) => {
  return twt.get(
    "search/tweets",
    {
      q: `#${hashtag}`,
      count: 100,
    },
    (err, data, response) => {
      return data;
    }
  );
};

// recieves a tweet stream based on a hashtag;

const getStream = (hashtag) => {
  const stream = twt.stream("status/filter", { track: "" });
  return stream.on("tweet", (tweet) => {
    return tweet;
  });
};

const getDefaulHeaders = () => {
  return {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
};

const getCuratedTweets = async () => {
  return axios({
    method: "get",
    url: `${url}/getCuratedTweets`,
    headers: getDefaulHeaders(),
  });
};

const resetTweets = async () => {
  return axios({
    method: "delete",
    url: `${url}/resetTweets`,
    headers: getDefaulHeaders(),
  });
};

const addTweet = async (data) => {
  return axios({
    method: "post",
    url: `${url}/addTweet`,
    data,
    headers: getDefaulHeaders(),
  });
};

const removeTweet = async (data) => {
  return axios({
    method: "post",
    url: `${url}/removeTweet`,
    data,
    headers: getDefaulHeaders(),
  });
};

module.exports = {
  getStream,
  twitGetter,
  getCuratedTweets,
  resetTweets,
  addTweet,
  removeTweet,
};
