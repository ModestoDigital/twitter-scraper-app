import {
  Avatar,
  Button,
  Divider,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import React, { useEffect, useState } from "react";
import { removeTweet, addTweet } from "../../../request";
import { Box } from "@mui/system";

const Item = ({ Tweet, curated, enlarge }) => {
  const [selected, setSelected] = useState(false);
  const [open, setOpen] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "#101b2e",
    border: "2px solid #000",
    boxShadow: 24,
    fontSize: 75,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setSelected(false);
  }, [Tweet]);

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 900 }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                sx={{ width: 100, height: 100, marginRight: 8 }}
                alt="Remy Sharp"
                src={Tweet.user?.profile_image_url || null}
                alt="https://www.northcountryjanitorial.com/wp-content/uploads/2017/01/generic-profile-icon-8.jpg"
              ></Avatar>
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment color="#ffff">
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="h3"
                    color="#ffff"
                    fontWeight="bold"
                    fontSize="72"
                  >
                    {Tweet.user?.screen_name || Tweet.user?.name || ""}
                  </Typography>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="h3"
                    color="#bbbf"
                  >
                    {` - ${Tweet.text || "text not found"}`}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </Box>
      </Modal>
      <Box sx={{ border: "1px", borderRadius: "10px", borderColor: "#dddf" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src={Tweet.user?.profile_image_url || null}
              alt="https://www.northcountryjanitorial.com/wp-content/uploads/2017/01/generic-profile-icon-8.jpg"
            ></Avatar>
          </ListItemAvatar>
          <ListItemText
            secondary={
              <React.Fragment color="#ffff">
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="#ffff"
                  fontWeight="bold"
                >
                  {Tweet.user?.screen_name || Tweet.user?.name || ""}
                </Typography>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="#bbbf"
                >
                  {` - ${Tweet.text || "text not found"}`}
                </Typography>
              </React.Fragment>
            }
          />
          {curated ? (
            <Button
              edge="end"
              disabled={selected}
              endIcon={enlarge || false ? <SendIcon /> : <DeleteIcon />}
              onClick={() => {
                setSelected(true);
                enlarge ? handleOpen() : removeTweet({ id: Tweet.id });
              }}
            ></Button>
          ) : (
            <Button
              edge="end"
              variant={selected ? "contained" : "text"}
              disabled={selected}
              endIcon={<SendIcon />}
              onClick={() => {
                setSelected(true);
                addTweet(Tweet);
              }}
            ></Button>
          )}
        </ListItem>
        <Divider />
      </Box>
    </>
  );
};

export default Item;
