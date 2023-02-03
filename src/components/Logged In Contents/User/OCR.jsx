import React, { useState } from "react";
import Tesseract from "tesseract.js";

const OCR = ({ drugName }) => {
  const [text, setText] = useState("");
  const [progressRate, setProgressRate] = useState({ progress: 0 });

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Tesseract.recognize(file)
      .progress((progress) => {
        console.log("progress", progress);
        setProgressRate(progress);
      })
      .then((result) => {
        setText(result.text);
      });
  };

  return (
    <div>
      <input
        className="w-fit ml-20 my-2"
        type="file"
        onChange={handleFileUpload}
      />
      {progressRate != 1 && (
        <p>Progress: {Math.ceil(progressRate.progress * 100)}%</p>
      )}
      {/* <p>{text}</p> */}
      {Math.ceil(progressRate.progress * 100) === 100 &&
      text.toLowerCase().includes(drugName.toLowerCase()) ? (
        <div className="mt-3 font-bold text-green-600">
          Your medicine is accepted
        </div>
      ) : (
        <div className="mt-3 font-bold text-red-600">
          The medicine is not matching with current selection
        </div>
      )}
    </div>
  );
};

export default OCR;
