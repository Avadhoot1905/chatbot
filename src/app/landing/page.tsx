'use client';

import React, { useState, KeyboardEvent } from 'react';
import Background from '../../components/Background';
import { generateContent } from "../actions/generateContent";

const ChatRoom: React.FC = () => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]); // 🔥 No placeholder messages
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        if (!input.trim() || loading) return;

        // Add user message
        const newUserMessage = { id: messages.length + 1, sender: 'You', text: input };
        setMessages(prevMessages => [...prevMessages, newUserMessage]);
        setInput(""); // Clear input field

        setLoading(true);

        try {
            const response = await generateContent(input);

            // Add bot response
            const newBotMessage = { id: messages.length + 2, sender: 'Bot', text: response };
            setMessages(prevMessages => [...prevMessages, newBotMessage]);
        } catch (error) {
            console.error("Error generating content:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !loading) {
            e.preventDefault();
            handleGenerate();
        }
    };

    return (
        <div className="flex h-screen">
            <Background children={undefined} />
            <main className="flex-1 p-4">
                <h2 className="text-xl font-semibold mb-4">Chat</h2>
                <div className="border border-gray-300 p-4 h-[80vh] overflow-y-auto bg-slate-700 text-white">
                    {messages.length === 0 ? (
                        <p className="text-gray-400 text-center">Start a conversation...</p>
                    ) : (
                        messages.map((message) => (
                            <div key={message.id} className="flex">
                                <div className={`mb-2 p-2 rounded max-w-md ${
                                    message.sender === 'You' 
                                        ? 'bg-blue-500 text-white ml-auto' 
                                        : 'bg-gray-300 text-black mr-auto'
                                }`}>
                                    <strong className="block text-sm text-gray-800">{message.sender}</strong>
                                    <span>{message.text}</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="mt-4 flex">
                    <input 
                        type="text" 
                        placeholder="Type a message..." 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 p-2 border border-gray-300 mr-2 text-black rounded-sm" 
                        disabled={loading}
                    />
                    <button 
                        onClick={handleGenerate}
                        className={`px-4 py-2 rounded ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600 text-white"}`}
                        disabled={loading}
                    >
                        {loading ? "Thinking..." : "Send"}
                    </button>
                </div>
            </main>
        </div>
    );
};

export default ChatRoom;
