import React, { useState, useEffect } from 'react';
import "../../css/ChatBot.css";

const ChatBot = () => {
    const [messages, setMessages] = useState(JSON.parse(localStorage.getItem('chatHistory')) || []);
    const [inputValue, setInputValue] = useState('');

    const [chatOpen, setChatOpen] = useState(false);

    const toggleChat = () => {
        setChatOpen(!chatOpen);
    }

    const handleSendMessage = (message) => {
        const newMessage = { text: message, sender: 'user' };
        const newMessages = [...messages, newMessage];

        let botResponse;
        switch (message.toLowerCase()) {
            case 'hello':
            case 'hi':
                botResponse = "Hello! How can I assist you today?";
                break;
            case 'what can you do':
                botResponse = "I can help you with movie recommendations, provide information about movies, and answer any questions you have about our services.";
                break;
            case 'suggest a movie':
            case 'recommend a film':
                botResponse = "Sure! Can you tell me what genre you're interested in? For example, action, comedy, or drama.";
                break;
            case 'latest movies':
                botResponse = "Here are some of the latest movies:\n1. The Avengers: Endgame\n2. Joker\n3. The Lion King\n4. Once Upon a Time in Hollywood";
                break;
            case 'how can I contact support':
                botResponse = "You can contact our support team via email at support@example.com or by calling our toll-free number at 1-800-123-4567.";
                break;
            default:
                botResponse = "I'm sorry, I'm not sure how to respond to that. Can you please rephrase or ask a different question?";
                break;
        }

        const updatedMessages = [...newMessages, { text: botResponse, sender: 'bot' }];
        setMessages(updatedMessages);

        // Update localStorage with the full set of messages
        localStorage.setItem('chatHistory', JSON.stringify(updatedMessages));
    };

    useEffect(() => {
        localStorage.setItem('chatHistory', JSON.stringify(messages));
    }, [messages]);

    return (
        <div className={`chatbot ${chatOpen ? 'open' : ''}`}>
            {chatOpen ? (
                <div>
                    <div className="header">
                        <h3>Chat with our Movie Expert</h3>
                        <button className="close-btn" onClick={toggleChat}>
                            X
                        </button>
                    </div>
                    <div className="messages">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
                            >
                                {message.text}
                            </div>
                        ))}
                    </div>
                    <div className="input">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSendMessage(inputValue);
                                    setInputValue('');
                                }
                            }}
                        />
                        <button onClick={() => handleSendMessage(inputValue)}>Send</button>
                    </div>
                </div>
            ) : (
                <div className="chat-icon" onClick={toggleChat}>
                    <span role="img" aria-label="Chat Icon">
                        💬
                    </span>
                </div>
            )}
        </div>
    );
};

export default ChatBot;
