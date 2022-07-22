import { Grid } from "@mui/material";
import UploadForm from "./UploadForm";
function UploadSection() {
  return (
    <Grid item xs={12} sm={8} md={5}>
      <UploadForm />
    </Grid>
  );
}

export default UploadSection;
