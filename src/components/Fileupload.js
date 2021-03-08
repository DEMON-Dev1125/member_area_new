import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
const FileIcon = "fileIcon.svg";

export default function MyDropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        // console.log(binaryStr, "*************");
        // console.log(file);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className="upload_before d-flex flex-column align-items-center">
        <img
          className="filter-green mb-2"
          src={require(`../assets/svg/${FileIcon}`).default}
        ></img>
        <div className="Edit-ft5 wd-258 ht-45 text-center">
          Clique aqui e faça o upload ilimitado de arquivos complementares.
        </div>
      </div>
    </div>
  );
}
