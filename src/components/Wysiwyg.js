import React, { Component } from "react";
import { EditorState, DefaultDraftBlockRenderMap } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import Immutable from "immutable";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../assets/css/wysiwyg.css"

export default class FBEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  blockRenderMap = Immutable.Map({
    section: {
      element: "section",
    },
    table: {
      element: "table",
    },
    tr: {
      element: "tr",
    },
    td: {
      element: "td",
    },
    th: {
      element: "th",
    },
  });
  extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(
    this.blockRenderMap
  );

  render() {
    const { editorState } = this.state;
    return (
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={this.onEditorStateChange}
        blockRenderMap={this.extendedBlockRenderMap}
      />
    );
  }
}
