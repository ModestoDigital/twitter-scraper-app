import { Box, Grid } from "@mui/material";
import React from "react";
import Image from "../../Components/bcgimg/876ecfcc5d7abd10dbc7161a5334e4f9_Banners_Vem_Pra_Globo_v4_Principal_Site_D1.png";
import CuratedList from "../../Components/CuratedList";

const Display = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vh",
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "1900px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Grid xs={9}></Grid>
      <Grid>
        <Grid
          marginLeft="5px"
          xs={3}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          overflow="hidden"
        >
          {CuratedList(false)}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Display;
