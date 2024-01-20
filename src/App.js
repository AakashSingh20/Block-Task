import React, { useState } from "react";
import { Button, Row, Col } from "antd";
import "./App.css";
import TextBlock from "./components/TextBlock";
import ImageBlock from "./components/ImageBlock";

const App = () => {
  const [blocks, setBlocks] = useState([]);

  // Function to add a new block at a specific index
  const addBlock = (type, index) => {
    // Create a new block with a unique ID and the specified type
    const newBlock = { id: new Date().getTime(), type };

    // Update the state with the new block inserted at the specified index
    setBlocks((prevBlocks) => {
      const updatedBlocks = [...prevBlocks];
      updatedBlocks.splice(index + 1, 0, newBlock);
      return updatedBlocks;
    });
  };

  // Function to remove a block by its ID
  const removeBlock = (id) => {
    // Filter out the block with the specified ID and update the state
    const updatedBlocks = blocks.filter((block) => block.id !== id);
    setBlocks(updatedBlocks);
  };

  return (
    <div className="app bg-[#15202b] overflow-auto">
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <Col>
          {blocks.map((block, index) => (
            <div
              key={block.id}
              className="block-wrapper flex flex-col items-center justify-center"
            >
              {/* Render TextBlock or ImageBlock based on block type */}
              {block.type === "text" ? (
                <TextBlock block={block} removeBlock={removeBlock} />
              ) : (
                <ImageBlock block={block} removeBlock={removeBlock} />
              )}

              {/* Add buttons for adding text and image blocks */}
              <div className="add m-4 space-x-4">
                <Button
                  className="bg-gray-700"
                  type="primary"
                  onClick={() => addBlock("text", index)}
                >
                  <img
                    className="h-[100%] invert-image"
                    src="img/document.png"
                    alt="add pic"
                  />
                </Button>
                <Button
                  className="bg-gray-700"
                  type="primary"
                  onClick={() => addBlock("image", index)}
                >
                  <img
                    className="h-[100%] invert-image"
                    src="img/image.png"
                    alt="add pic"
                  />
                </Button>
              </div>
            </div>
          ))}

          {/* Display add buttons if there are no blocks */}
          {blocks.length === 0 && (
            <div className="add m-4 space-x-4">
              <Button
                className=" bg-gray-700"
                type="primary"
                onClick={() => addBlock("text", blocks.length - 1)}
              >
                <img
                  className="h-[100%] invert-image"
                  src="img/document.png"
                  alt="add pic"
                />
              </Button>
              <Button
                className="bg-gray-700"
                type="primary"
                onClick={() => addBlock("image", blocks.length - 1)}
              >
                <img
                  className="h-[100%] invert-image"
                  src="img/image.png"
                  alt="add pic"
                />
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default App;
