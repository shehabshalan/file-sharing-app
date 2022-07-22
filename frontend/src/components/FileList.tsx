import { List, Paper } from "@mui/material";
import Item from "./Item";
import { useUserContext } from "../context/UserContext";

function FileList() {
  const { filesUploaded } = useUserContext();
  return (
    <>
      {filesUploaded.length > 0 && (
        <Paper elevation={1}>
          <List>
            {filesUploaded.map((file: any) => (
              <Item key={file.id} file={file} />
            ))}
          </List>
        </Paper>
      )}
    </>
  );
}

export default FileList;
