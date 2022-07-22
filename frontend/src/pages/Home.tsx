import { CssBaseline, Grid } from "@mui/material";
import React from "react";
import LeftImage from "../components/LeftImage";
import UploadSection from "../components/UploadSection";

function Home() {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <LeftImage />
      <UploadSection />
    </Grid>
  );
}

export default Home;
