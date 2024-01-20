import React, { useState } from "react";
import { Button } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const TextBlock = ({ block, removeBlock }) => {
  // State to manage the text content in the text area
  const [text, setText] = useState("");

  // Function to handle text change
  const handleTextChange = (content) => {
    if (content.length <= 250) {
      setText(content);
    }
  };

  return (
    <div className=" text-block lg:w-[30vw] md:w-[40vw] sm:w-full h-[30vh] bg-[#22303C] p-3 rounded-xl space-y-2">
      {/* Text area */}
      <ReactQuill
        className="h-[170px] rounded-md overflow-hidden bg-[#edf6f9]"
        value={text}
        onChange={handleTextChange}
        modules={{
          toolbar: [["bold", "italic", "underline", "strike"]],
        }}
        placeholder="Type here..."
      />

      {/* Controls for character count and removal */}
      <div className="controls flex justify-between">
        {/* Display character count */}
        <p className="text-sm text-gray-500">{`${text.length}/250 characters`}</p>

        {/* Controls for removing the block */}
        <div className="lcontrols">
          <Button
            className="bg-red-500"
            danger
            onClick={() => removeBlock(block.id)}
          >
            {/* Delete icon */}
            <img
              className="h-[100%] invert-image"
              src="img/delete.png"
              alt="delete icon"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TextBlock;
