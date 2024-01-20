import React, { useState } from "react";
import { Input, Button } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextBlock = ({ block, removeBlock }) => {
  const [text, setText] = useState("");

  const handleTextChange = (value) => {
    // const newText = e.target.value;

    if (value.length <= 250) {
      setText(value);
    }
  };

  return (
    <div className="text-block w-[30vw]  bg-[#22303C] p-3 rounded-xl space-y-2">
      <ReactQuill
        value={text}
        onChange={handleTextChange}
        modules={{
          toolbar: [["bold", "italic", "underline", "strike"]],
        }}
        placeholder="Type your text here..."
      />
      {/* <Input.TextArea
        className="focus:bg-gray-700 text-white bg-gray-700 hover:bg-gray-700 border-none"
        style={{
          fontFamily: "'Times New Roman'",
          fontSize: "12px",
        }}
        value={text}
        onChange={handleTextChange}
        autoSize={{ minRows: 8, maxRows: 10 }}
      /> */}
      <div className="controls flex justify-between">
        <p className="text-sm text-gray-500">{`${text.length}/250 characters`}</p>
        <div className="lcontrols">
          <Button
            className="bg-red-500"
            danger
            onClick={() => removeBlock(block.id)}
          >
            <img
              className="h-[100%] invert-image"
              src="img/delete.png"
              alt="delete pic"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TextBlock;
