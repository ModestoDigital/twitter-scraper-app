import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "../../Components/bcgimg/876ecfcc5d7abd10dbc7161a5334e4f9_Banners_Vem_Pra_Globo_v4_Principal_Site_D1.png";
import CastConnectedIcon from "@mui/icons-material/CastConnected";
import BuildIcon from "@mui/icons-material/Build";
import { Link } from "react-router-dom";

const Home = () => {
  console.log("home");
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
      <Grid
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Link to="/display">
          <Button to variant="contained" endIcon={<CastConnectedIcon />}>
            Display
          </Button>
        </Link>
        <Link to="control">
          <Button variant="contained" endIcon={<BuildIcon />}>
            Controle
          </Button>
        </Link>
      </Grid>
    </Box>
  );
};

export default Home;
