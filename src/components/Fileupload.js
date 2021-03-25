import React, { useState } from "react";

export default function Fileupload(props) {
  const FileIcon = "fileIcon.svg";
  const [image, setImage] = useState(null);
  const handleImgChange = ({ target: { files } }) => {
    const cancel = !files.length;
    if (cancel) return;
    setImage(URL.createObjectURL(files[0]));
    props.fileData(files);
  };
  const hiddenFileInput = React.useRef(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
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
