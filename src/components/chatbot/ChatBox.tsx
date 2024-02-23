
const ChatBox = () => {
    // Sample messages for demonstration purposes
    const messages = [
        { id: 1, text: 'Hello there!', sender: 'user' },
        { id: 2, text: 'Hi! How can I help you today?', sender: 'admin' },
    ];

    return (
        <div>
            {messages.map((message) => (
                <div key={message.id} className={message.sender === 'admin' ? 'text-green-700' : 'text-blue-700'}>
                    {message.text}
                </div>
            ))}
        </div>
    );
};

export default ChatBox;
