import React, { useState } from "react";
import MUIEditor, {
  MUIEditorState,
  toolbarControlTypes,
} from "react-mui-draft-wysiwyg";

export default function WysiwygModule() {
  const config = {
    editor: {
      wrapperElement: "div",

      style: {
        // border: '1px solid gray',
        borderRadius: 15,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        minHeight: 173,
        padding: 30,
        backgroundColor: "#12263F0D",
        margin: 0,
      },
    },
    toolbar: {
      className: "my-class-name",
      style: {
        paddingTop: 30,
        paddingLeft: 18,
        paddingRight: 18,
        paddingbottom: 0,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        background: "#12263F0D",
      },
      controls: [
        toolbarControlTypes.undo,
        toolbarControlTypes.redo,
        toolbarControlTypes.divider,
        toolbarControlTypes.bold,
        toolbarControlTypes.italic,
        toolbarControlTypes.underline,
        toolbarControlTypes.strikethrough,
        toolbarControlTypes.fontColor,
        toolbarControlTypes.fontBackgroundColor,
        toolbarControlTypes.divider,
        toolbarControlTypes.linkAdd,
        toolbarControlTypes.linkRemove,
        toolbarControlTypes.image,
        toolbarControlTypes.divider,
        toolbarControlTypes.blockType,
        toolbarControlTypes.fontSize,
        toolbarControlTypes.fontFamily,
        toolbarControlTypes.textAlign,
        toolbarControlTypes.divider,
        toolbarControlTypes.unorderedList,
        toolbarControlTypes.orderedList,
      ],
    },
  };
  const [editorState, setEditorState] = React.useState(
    MUIEditorState.createEmpty(config)
  );
  const onChange = (newState) => {
    setEditorState(newState);
  };
  return (
    <MUIEditor editorState={editorState} onChange={onChange} config={config} />
  );
}
