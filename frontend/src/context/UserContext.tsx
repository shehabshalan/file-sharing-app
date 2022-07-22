import React from "react";
import { createContext, useContext, useState } from "react";
import axios from "axios";
import lodash from "lodash";
import { Endpoints } from "../constants/endpoints";
const UserContext = createContext<any>({} as any);

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filesUploaded, setFilesUploaded] = useState<any[]>([]);
  const [expirationDateTime, setExpirationDateTime] = useState<any>(null);
  const [uploading, setUploading] = useState(false);
  const [sharingError, setSharingError] = useState(false);
  const [sharingSuccess, setSharingSuccess] = useState(false);
  const [sharingLink, setSharingLink] = useState("");

  const handleExpirationDateTime = (newValue: any) => {
    setExpirationDateTime(newValue._d.toISOString());
  };
  const handleFileChange = (e: any) => {
    const selectedFiles = [...filesUploaded, ...e.target.files];
    console.log(selectedFiles);

    setFilesUploaded(selectedFiles);
  };

  const handleDeleteFile = (file: File) => {
    const newFilesUploaded = lodash.without(filesUploaded, file);
    setFilesUploaded(newFilesUploaded);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploading(true);
    let formData = new FormData();
    lodash.forEach(filesUploaded, (file) => {
      formData.append("myfile", file);
    });

    formData.append("expiresAt", expirationDateTime);
    try {
      const res = await axios.post(Endpoints.uploadFiles, formData);
      const { data } = res;
      setSharingLink(data.result);
      setUploading(false);
      setSharingSuccess(true);
      setFilesUploaded([]);
      setExpirationDateTime(null);
    } catch {
      setUploading(false);
      setFilesUploaded([]);
      setSharingError(true);
      setExpirationDateTime(null);
    }
  };
  return (
    <UserContext.Provider
      value={{
        handleFileChange,
        handleSubmit,
        handleExpirationDateTime,
        expirationDateTime,
        filesUploaded,
        uploading,
        sharingError,
        sharingSuccess,
        sharingLink,
        handleDeleteFile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
