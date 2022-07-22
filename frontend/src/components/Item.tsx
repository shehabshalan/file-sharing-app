import { Divider, IconButton, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { Delete } from "@mui/icons-material";
import { useUserContext } from "../context/UserContext";
function Item({ file }: { file: any }) {
  const { filesUploaded, handleDeleteFile } = useUserContext();
  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton
            onClick={() => {
              handleDeleteFile(file);
            }}
          >
            <Delete />
          </IconButton>
        }
      >
        <ListItemText
          primary={file.name}
          secondary={`${(file.size / 1024).toFixed(1)} KB - ${
            file.type.split("/")[1]
          }`}
        />
      </ListItem>

      {file === filesUploaded[filesUploaded.length - 1] ? null : <Divider />}
    </>
  );
}

export default Item;
