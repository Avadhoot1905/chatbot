import React from 'react';

interface BackgroundProps {
    children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <nav className="bg-black shadow-md p-4 w-full">
                <h1 className="text-2xl font-bold text-gray-800">Navbar</h1>
            </nav>
            <div className="flex flex-1">
                <aside className="w-64 bg-white p-4 border-r border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-700">Sidebar</h2>
                </aside>
                <main className="flex-1 p-6 bg-gray-50">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Background;