import { Box } from "@mui/system";
import React from "react";

const Base = (component) => {
  return <Box sx={{ width: "100%", background: "#0d0040" }}>{component}</Box>;
};

export default Base;
