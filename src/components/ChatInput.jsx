import React, { useState } from "react";
import { useChat } from "./ChatContext";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const ChatInput = () => {
    const [message, setMessage] = useState("");
    const { addMessage } = useChat();

    const handleSendMessage = () => {
        if (message.trim()) {
            addMessage({ text: message, sender: "You", timestamp: new Date().toLocaleTimeString() });
            setMessage("");
        }
    };

    return (
        <div className="chat-footer gap-3">
            <InputText
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Напишіть повідомлення..."
                className="w-75"
                style={{ borderRadius: "20px" }}
            />
            <Button
                label="Відправити"
                onClick={handleSendMessage}
                className="ml-2"
                style={{
                    borderRadius: "20px",
                    backgroundColor: "#007bff",
                    color: "white",
                    padding: "0 20px",
                    justifyContent: "center"
                }}
            />
        </div>
    );
};

export default ChatInput;
