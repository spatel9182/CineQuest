import React, { useState, useEffect } from 'react';
import "../../css/ChatBot.css";
import ChatBotImage from '../../assets/chatbot.png';
import userImage from '../../assets/user.jpg';
import botImage from '../../assets/chatbot.png';
import sendIcon from '../../assets/send-message.png';


const ChatBot = () => {

    const [messages, setMessages] = useState(JSON.parse(localStorage.getItem('chatHistory')) || []);
    const [inputValue, setInputValue] = useState('');

    const [chatOpen, setChatOpen] = useState(false);

    const toggleChat = () => {
        setChatOpen(!chatOpen);
    }

    const handleSendMessage = (message) => {
        const userMessage = { text: message, sender: 'user', image: userImage }; // Include user image
        const newMessages = [...messages, userMessage];

        let botResponse;
        switch (message.toLowerCase()) {
            case 'hello':
            case 'hi':
                botResponse = "Hello! How can I assist you today?";
                break;
            case 'what can you do':
                botResponse = "I can help you with movie recommendations, provide information about movies, and answer any questions you have about our services.";
                break;
            case 'suggest me a movie':
            case 'recommend a film':
                botResponse = "Sure! Can you tell me what genre you're interested in? For example, action, comedy, or drama.";
                break;
            case 'comedy':
                botResponse = "Sure! I recommend checking out the movie 'The Grand Budapest Hotel'. I think you'll really enjoy it!";
                break;
            case 'latest movies':
                botResponse = "Here are some of the latest movies:\n1. The Avengers: Endgame\n2. Joker\n3. The Lion King\n4. Once Upon a Time in Hollywood";
                break;
            case 'how can I contact support':
                botResponse = "You can contact our support team via email at support@cinequest.com or by calling our toll-free number at 1-800-123-4567.";
                break;
            case 'Thank you':
            case 'Thanks':
            case 'thanks':
                botResponse = "You're welcome! If you have any more questions or need further assistance, feel free to ask.";
                break;
            default:
                botResponse = "I'm sorry, I'm not sure how to respond to that. Can you please rephrase or ask a different question?";
                break;
        }
        const botMessage = { text: botResponse, sender: 'bot', image: botImage }; // Include bot image
        const updatedMessages = [...newMessages, botMessage];
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
                                <div className="message-content">
                                    {message.text}
                                </div>
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
                        <div className="send-btn" onClick={() => handleSendMessage(inputValue)} >
                            <img src={sendIcon} alt="Send" />
                        </div>
                    </div>
                    <br />


                </div>
            ) : (
                <div className="chat-icon" onClick={toggleChat}>
                    <img src={ChatBotImage} alt="Chat Icon" />
                </div>
            )}
        </div>
    );
};

export default ChatBot;
