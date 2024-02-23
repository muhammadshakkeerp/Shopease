import { useState } from 'react';
import { BsChatQuoteFill } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import ChatBox from './ChatBox';

 const ChatBot = () => {
    const [toggleChat, setToggleChat] = useState(false);

    const toggleChatWindow = () => {
        setToggleChat(!toggleChat);
    };

    return (
        <div>
            {/* Chat window */}
            {toggleChat && (
                <div className="fixed bottom-0 right-0 xl:w-[20em] xl:h-[25em] bg-white border-l border-t border-gray-200 rounded-tl-lg shadow-lg overflow-hidden">
                    {/* Chat header */}
                    <div className="flex justify-between items-center bg-gradient-to-r from-[#5390f2] to-green-400 text-white py-2 px-4">
                        <h3 className="text-lg font-semibold">Chat with Us</h3>
                        <button type='button' title="Close" onClick={toggleChatWindow}>
                            <FaTimes className="text-lg" />
                        </button>
                    </div>
                    {/* Chat messages */}
                    <div className="p-4 h-64 overflow-auto">
                        {/* ChatBox component to display messages */}
                        <ChatBox />
                    </div>
                    {/* Chat input */}
                    <div className="p-4 bg-gray-100">
                        {/* Add input field and send button */}
                        <input
                            type="text"
                            placeholder="Type your message here..."
                            className="w-full border border-gray-300 rounded-lg p-2"
                        />
                        <button type='submit' className="bg-green-500 text-white px-4 py-2 rounded-lg ml-2">Send</button>
                    </div>
                </div>
            )}

            {/* Chat button */}
            <div className="fixed bottom-4 right-4">
                <button
                    type='button'
                    title="Click here to toggle chat"
                    onClick={toggleChatWindow}
                    className="bg-gradient-to-r from-[#5390f2] to-green-400 p-3 rounded-full shadow-lg"
                >
                    <BsChatQuoteFill className="text-white text-4xl" />
                </button>
            </div>
        </div>
    );
};

export default ChatBot