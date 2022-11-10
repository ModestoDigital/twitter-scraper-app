import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getCuratedTweets, resetTweets } from "../../request/index";
import TweetList from "../List/index";
import DeleteIcon from "@mui/icons-material/Delete";

const CuratedList = (topmenu) => {
  const [tweetModeratedList, setTweetModeratedList] = useState([]);

  useEffect(() => {
    setInterval(() => {
      getCuratedTweets().then((list) => {
        setTweetModeratedList(list.data);
      });
    }, 3000);
  }, []);

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
      {topmenu ? (
        <>
          <Typography>Tweets Aprovados</Typography>
          <Button
            edge="end"
            variant={"contained"}
            endIcon={<DeleteIcon />}
            onClick={() => {
              resetTweets();
            }}
          >
            Apagar Todos
          </Button>
        </>
      ) : (
        <Grid textAlign="center">
          <Typography fontWeight="bold" fontSize="25rm">
            Tweets
          </Typography>
        </Grid>
      )}
      <Box sx={{ display: "flex", flexWrap: "nowrap" }}>
        <Grid sx={{ overflow: "auto" }} xs={12}>
          <TweetList
            Tweets={tweetModeratedList}
            curated={true}
            enlarge={!topmenu}
            sx={{ overflow: "auto" }}
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default CuratedList;
