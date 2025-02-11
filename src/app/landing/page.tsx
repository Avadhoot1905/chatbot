'use client';

import React, { useState, KeyboardEvent } from 'react';
import Background from '../../components/Background';

const ChatRoom: React.FC = () => {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'Alice', text: 'Hey, how are you doing today?' }
    ]);
    const [inputMessage, setInputMessage] = useState('');

    const sendMessage = () => {
        if (inputMessage.trim() === '') return;

        const newMessage = {
            id: messages.length + 1,
            sender: 'You', 
            text: inputMessage
        };

        setMessages([...messages, newMessage]);
        setInputMessage('');
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className="flex h-screen">
            <Background children={undefined}/>
            <main className="flex-1 p-4">
                <h2 className="text-xl font-semibold mb-4">Chat with {messages[0].sender}</h2>
                <div className="border border-gray-300 p-4 h-[80vh] overflow-y-auto text-black bg-slate-700">
                    {messages.map((message) => (
                        <div 
                            key={message.id} 
                            className="flex"
                        >
                            <div 
                                className={`mb-2 p-2 rounded max-w-md ${
                                    message.sender === 'You' 
                                        ? 'bg-blue-100 ml-auto' 
                                        : 'bg-gray-100 mr-auto'
                                }`}
                            >
                                <strong className="block text-sm text-gray-600">{message.sender}</strong>
                                <span>{message.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex">
                    <input 
                        type="text" 
                        placeholder="Type a message..." 
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 p-2 border border-gray-300 mr-2 text-black rounded-sm" 
                    />
                    <button 
                        onClick={sendMessage}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Send
                    </button>
                </div>
            </main>
        </div>
    );
};

export default ChatRoom;