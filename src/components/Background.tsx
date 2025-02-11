import React from 'react';

interface BackgroundProps {
    children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
    const contacts = [
        { id: 1, name: 'Alice Johnson', lastMessage: 'Sure, see you later!' },
        { id: 2, name: 'Bob Smith', lastMessage: 'Meeting at 3 PM?' },
        { id: 3, name: 'Charlie Brown', lastMessage: 'Project looks good' },
        { id: 4, name: 'Diana Lee', lastMessage: 'Thanks for the update' },
        { id: 5, name: 'Ethan Wong', lastMessage: 'Completed the report' }
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <nav className="bg-slate-950 shadow-md p-4 w-full">
                <h1 className="text-2xl font-bold text-white">ChatGOAT</h1>
            </nav>
            <div className="flex flex-1">
                <aside className="w-64 bg-slate-900 p-4 border-r border-gray-200">
                    <h2 className="text-xl font-semibold text-white mb-4">Chats</h2>
                    {contacts.map((contact) => (
                        <div 
                            key={contact.id} 
                            className="mb-3 p-2 bg-blue-600 hover:bg-blue-700 rounded cursor-pointer"
                        >
                            <div className="font-medium">{contact.name}</div>
                            <div className="text-sm text-white truncate">
                                {contact.lastMessage}
                            </div>
                        </div>
                    ))}
                </aside>
                <main className="flex-1 p-6 bg-gray-50">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Background;