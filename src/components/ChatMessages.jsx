import React from "react";
import { useChat } from "./ChatContext";

const ChatMessages = () => {
    const { messages } = useChat();

    return (
        <div className="chat-body">
            <div className="messages-list">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender === "You" ? "sent" : "received"}`}>
                        <div className="message-header gap-3">
                            <span className="sender">{message.sender}</span>
                            <span className="timestamp">{message.timestamp}</span>
                        </div>
                        <div className="message-body">{message.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatMessages;
