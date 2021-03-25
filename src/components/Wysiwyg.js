import React, { useState, useEffect } from "react";
import {
  EditorState,
  ContentState,
  convertToRaw,
  convertFromHTML,
} from "draft-js";

import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../assets/css/wysiwyg.css";

const Wysiwyg = (props) => {
  const [editorState, setEditorState] = useState("");

  useEffect(() => {
    const contentDataState = ContentState.createFromBlockArray(
      convertFromHTML(props.value)
    );
    const editorDataState = EditorState.createWithContent(contentDataState);
    setEditorState(editorDataState);
  }, [props.value]);

  const getHtml = (editorState) =>
    draftToHtml(convertToRaw(editorState.getCurrentContent()));

  const [convertedContent, setConvertedContent] = useState(null);

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
    props.editorData(getHtml(editorState));
  };

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  return (
    <div className="App">
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        placeholder="A mensagem vai aqui ..."
      />
    </div>
  );
};
export default Wysiwyg;
