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
            {filesUploaded.map((file: File, i: string) => (
              <Item file={file} key={i} />
            ))}
          </List>
        </Paper>
      )}
    </>
  );
}

export default FileList;
