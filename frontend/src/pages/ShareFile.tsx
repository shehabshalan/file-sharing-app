import React, { useEffect, useState } from "react";
import { Endpoints } from "../constants/endpoints";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";
import SharedFileItem from "../components/SharedFileItem";
function ShareFile() {
  const { id } = useParams();

  const [files, setFiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getFiles = async () => {
    setLoading(true);
    try {
      const res = await axios.get(Endpoints.getSharedFileById + id);
      const { data } = res;
      setFiles(data.result);
      setLoading(false);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    getFiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      sx={{
        mt: 5,
        mb: 5,
      }}
    >
      {error ? (
        <Typography>No file found or the link has expired</Typography>
      ) : loading ? (
        <CircularProgress />
      ) : (
        <Container>
          <Typography variant="h6" gutterBottom>
            {files.length === 1
              ? "Here is the shared file"
              : "Here are the shared files"}
          </Typography>

          <Grid
            container
            spacing={3}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            {files.map((file) => (
              <Grid item xs={12} sm={6} md={4} key={file.id}>
                <SharedFileItem file={file} />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </Box>
  );
}

export default ShareFile;
