import axios from "axios";

const url = "http://localhost:5000";

export const getDefaulHeaders = () => {
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
};

export const twitGetter = async (hashtag) => {
  console.log(hashtag);
  return axios({
    method: "get",
    url: `${url}/search?q=${hashtag}`,
    headers: getDefaulHeaders(),
  });
};

export const getCuratedTweets = async () => {
  return axios({
    method: "get",
    url: `${url}/getCuratedTweets`,
    headers: getDefaulHeaders(),
  });
};

export const resetTweets = async () => {
  return axios({
    method: "delete",
    url: `${url}/resetTweets`,
    headers: getDefaulHeaders(),
  });
};

export const addTweet = async (data) => {
  return axios({
    method: "POST",
    url: `${url}/addTweet`,
    data,
    headers: getDefaulHeaders(),
  });
};

export const removeTweet = async (data) => {
  return axios({
    method: "POST",
    url: `${url}/removeTweet`,
    data,
    headers: getDefaulHeaders(),
  });
};

// module.exports = {
//   getStream,
//   twitGetter,
//   getCuratedTweets,
//   resetTweets,
//   addTweet,
//   removeTweet,
// };
