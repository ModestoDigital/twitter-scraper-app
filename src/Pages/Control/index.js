import { Grid, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import CuratedList from "../../Components/CuratedList";
import SearchList from "../../Components/SearchList";
import Base from "../../Components/Base";
import Image from "../../Components/bcgimg/876ecfcc5d7abd10dbc7161a5334e4f9_Banners_Vem_Pra_Globo_v4_Principal_Site_D1.png";

const Control = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vh",
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "1900px",
        textAlign: "center",
        alignContent: "center",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} height="200px">
          <Typography variant="h1" fontWeight={800}>
            Controle de Exibição
          </Typography>
        </Grid>
        <Grid item xs={6} height="700px">
          {SearchList()}
        </Grid>
        <Grid item xs={6} height="700px">
          {CuratedList(true)}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Control;
