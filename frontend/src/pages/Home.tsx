import { CssBaseline, Grid } from "@mui/material";
import React from "react";
import LeftImage from "../components/LeftImage";
import UploadForm from "../components/UploadForm";

function Home() {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <LeftImage />
      <UploadForm />
    </Grid>
  );
}

export default Home;
