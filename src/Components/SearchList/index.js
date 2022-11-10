import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { twitGetter } from "../../request";
import TweetList from "../List";

const SearchList = () => {
  const [value, setvalue] = useState("");
  const [searchHashtag, setSearchHashtag] = useState("");
  const [tweetSearchList, setTweetSearchList] = useState([]);
  const [clk, setClk] = useState(1);

  const handleInput = (e) => {
    setvalue(e.target.value.replace("#", ""));
  };

  useEffect(() => {
    if (searchHashtag)
      twitGetter(searchHashtag).then((searchList) => {
        setTweetSearchList(searchList.data);
      });
  }, [searchHashtag, clk]);

  return (
    <Box
      sx={{
        background: "#dddd",
        margin: "10px",
        padding: "10px",
        border: "1px",
        borderColor: "#350075",
        borderRadius: "10px",
        boxShadow: "5px 3px 3px #555357",
        overflowY: "auto",
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        height: "700px",
      }}
    >
      <Typography>Buscar por Hashtag</Typography>
      <Box sx={{ display: "flex", flexWrap: "nowrap" }}>
        <TextField
          minwidth="200px"
          id="outlined-basic"
          variant="filled"
          label="Hashtag"
          value={value}
          onChange={handleInput}
        ></TextField>
        <Button
          variant="contained"
          sx={{ minHeight: "50px" }}
          onClick={() => {
            setSearchHashtag(value);
            setClk(Date.now());
          }}
        >
          Procurar
        </Button>
      </Box>
      <TweetList Tweets={tweetSearchList} curated={false} maxheight="500px" />
    </Box>
  );
};

export default SearchList;
