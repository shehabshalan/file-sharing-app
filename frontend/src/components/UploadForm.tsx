import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import DateAndTimePicker from "./DateAndTimePicker";
import FileList from "./FileList";
import { useUserContext } from "../context/UserContext";
import { Alert, AlertTitle, LoadingButton } from "@mui/lab";

const Input = styled("input")({
  display: "none",
});

function UploadForm() {
  const {
    handleFileChange,
    filesUploaded,
    handleSubmit,
    uploading,
    expirationDateTime,
    sharingLink,
    sharingError,
    sharingSuccess,
  } = useUserContext();

  return (
    <Box
      sx={{
        mb: 5,
        margin: "auto",
        marginTop: "2rem",
        marginBottom: "2rem",
        padding: "2rem",
      }}
    >
      <Typography component="h1" variant="h6" align="center">
        Upload files to share with others in 3 easy steps
      </Typography>

      <FileList />
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Typography component="p" variant="body1" align="left" mb={4}>
          <br />
          <strong>1.</strong> Select files to upload
        </Typography>
        <label htmlFor="contained-button-thumbnail">
          <Input
            accept=".doc, .pdf, .docx, .txt, .csv, .xls, .xlsx, image/*"
            id="contained-button-thumbnail"
            name="myfile"
            onChange={handleFileChange}
            type="file"
            multiple
          />
          <Button
            sx={{
              height: "5rem",
            }}
            variant="outlined"
            component="span"
            fullWidth
          >
            <AddIcon />
          </Button>
        </label>

        {filesUploaded.length > 0 && (
          <>
            <Typography component="p" variant="body1" align="left" mb={4}>
              <br />
              <strong>2.</strong> Set expiration date and time
            </Typography>
            <DateAndTimePicker />
          </>
        )}

        {expirationDateTime && filesUploaded.length > 0 && (
          <>
            <Typography component="p" variant="body1" align="left">
              <br />
              <strong>3.</strong> Click "Upload"
            </Typography>
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              loading={uploading}
              sx={{ mt: 4, mb: 2 }}
            >
              Upload
            </LoadingButton>
          </>
        )}
      </Box>
      {sharingError && (
        <Alert severity="error" sx={{ mt: 4 }}>
          <AlertTitle>Error</AlertTitle>
          An error occurred while uploading your files.
        </Alert>
      )}
      {sharingSuccess && (
        <Alert severity="success" sx={{ mt: 4 }}>
          <AlertTitle> Here is your link</AlertTitle>
          <Typography>
            <a href={sharingLink}>{sharingLink}</a>
          </Typography>
        </Alert>
      )}
    </Box>
  );
}

export default UploadForm;
