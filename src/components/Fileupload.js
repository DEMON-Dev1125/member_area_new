import React, { useState, useRef, useEffect } from "react";

export default function Fileupload(props) {
  const FileIcon = "fileIcon.svg";
  const [image, setImage] = useState(null);
  const handleImgChange = ({ target: { files } }) => {
    const cancel = !files.length;
    if (cancel) return;
    setImage(URL.createObjectURL(files[0]));

    const fileInfo = files[0];
    // console.log("upload", fileInfo);
    props.fileUpload(fileInfo);
  };
  const hiddenFileInput = useRef(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  useEffect(() => {
    if (props.imagePath) setImage(props.imagePath);
  }, [props.imagePath]);

  return (
    <div className="upload_before d-flex flex-column align-items-center">
      {!image ? (
        <>
          <div
            className=" text-center"
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          >
            <input
              id="file"
              type="file"
              ref={hiddenFileInput}
              onChange={handleImgChange}
              style={{ display: "none" }}
            />
            <img
              className="filter-green mb-2"
              src={require(`../assets/img/${FileIcon}`).default}
            />
            <div className="Edit-ft5">
              Clique aqui e faça o upload ilimitado de arquivos complementares.
            </div>
          </div>
        </>
      ) : (
        <div
          className=" text-center"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          <input
            id="file"
            type="file"
            name="file"
            ref={hiddenFileInput}
            onChange={handleImgChange}
            style={{ display: "none" }}
          />
          <img src={image} width="100%" height="100%" />
        </div>
      )}
    </div>
  );
}
