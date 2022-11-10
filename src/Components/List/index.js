import { Grid, List } from "@mui/material";
import React, { useEffect, useState } from "react";
import Item from "./Item";
import { getCuratedTweets } from "../../request";

const TweetList = ({ curated, Tweets, enlarge }) => {
  const [twtList, setTwtList] = useState([]);
  const [finalList, setFinalList] = useState([]);

  useEffect(() => {
    setTwtList(Tweets || []);
  }, [Tweets]);

  useEffect(() => {
    if (curated) {
      setFinalList(twtList);
    } else {
      getCuratedTweets().then((curTweets) => {
        if (curTweets.length) {
          const curIdarr = curTweets.map((cur) => cur.id);
          setFinalList(() => {
            return twtList.filter((twt) => !curIdarr.includes(twt.id));
          });
        } else {
          setFinalList(twtList);
        }
      });
    }
  }, [curated, twtList]);

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "#101b2e",
        color: "#dddd",
      }}
    >
      {finalList.length
        ? finalList.map((element) => (
            <Item Tweet={element} curated={curated} enlarge={enlarge}></Item>
          ))
        : "Sem Tuites"}
    </List>
  );
};

export default TweetList;
