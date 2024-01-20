import React, { useState } from "react";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const ImageBlock = ({ block, removeBlock }) => {
  // State to manage the uploaded image
  const [image, setImage] = useState(null);

  // Custom request function to handle file upload
  const customRequest = ({ file }) => {
    setImage(file);
  };

  // Function to remove file extension from filename
  const removeFileExtension = (filename) => {
    return filename.replace(/\.[^/.]+$/, ""); // Remove file extension
  };

  return (
    <>
      {/* Image block container */}
      <div className="image-block lg:w-[30vw] md:w-[40vw] sm:w-full h-[33vh] rounded-xl p-3 bg-[#22303C] space-y-2">
        {/* Image display area */}
        <div className="h-[84%] rounded-md overflow-hidden">
          {image ? (
            // Display uploaded image
            <img
              style={{
                width: "100%",
                objectFit: "cover",
              }}
              src={URL.createObjectURL(image)}
              alt="Uploaded"
            />
          ) : (
            // Upload.Dragger component for image upload
            <Upload.Dragger accept=".png,.jpeg" customRequest={customRequest}>
              <Button className="text-white" icon={<UploadOutlined />}>
                Upload Image
              </Button>
            </Upload.Dragger>
          )}
        </div>

        {/* Controls for image block */}
        <div className="controls flex ">
          {/* Display image filename without extension */}
          {image && (
            <p className="text-sm text-gray-500">
              {removeFileExtension(image.name)}
            </p>
          )}

          {/* Controls for removing the image block */}
          <div className="lcontrols ml-auto">
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
    </>
  );
};

export default ImageBlock;
