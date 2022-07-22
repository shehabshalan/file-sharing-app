import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";

import BackupIcon from "@mui/icons-material/Backup";

const Input = styled("input")({
  display: "none",
});
function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      File Sharing App {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
function UploadForm() {
  const [file, setFile] = React.useState<File | undefined>(undefined);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0]);
  };

  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
        }}
      >
        <Typography component="h1" variant="h5">
          Upload files here
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
          <label htmlFor="contained-button-thumbnail">
            <Input
              accept=".doc, .pdf, .docx, .txt, .csv, .xls, .xlsx, image/*"
              id="contained-button-thumbnail"
              name="myfile"
              onChange={handleChange}
              type="file"
              multiple
            />
            <Button
              sx={{ width: "100%" }}
              variant="outlined"
              component="span"
              fullWidth
            >
              <AddIcon />
            </Button>
          </label>
          {file && (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Upload
            </Button>
          )}

          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Box>
    </Grid>
  );
}

export default UploadForm;
