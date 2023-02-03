import React, { useState } from "react";

function ChatBot() {
  const [conversation, setConversation] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // use input to generate a response
    const response = generateResponse(input);
    setConversation([
      ...conversation,
      { message: input, sender: "user" },
      { message: response, sender: "bot" },
    ]);
    setInput("");
  };

  const generateResponse = (input) => {
    // use some logic to generate a response
    // for example, if the input contains the word "hello", return "Hello there!"
    if (input.toLowerCase().includes("hello")) {
      return "Hello there!";
    } else {
      return "I am not sure what you mean.";
    }
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="text-4xl border-4">Chat Bot</div>
      <div className="chat-window">
        {conversation.map((message, index) => (
          <div
            key={index}
            className={`text-gray-700 ${
              message.sender === "bot" ? "text-right" : "text-left"
            }`}
          >
            {message.message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="border rounded-lg p-2"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-blue-500 text-white rounded-lg p-2" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatBot;
