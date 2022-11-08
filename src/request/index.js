import twt from "../connection_info";

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

module.exports = {
  twitGetter,
};
