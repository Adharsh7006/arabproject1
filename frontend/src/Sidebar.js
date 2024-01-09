// Chat.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Sidebar = () => {
  const [messages, setMessages] = useState([]);
  const [sender, setSender] = useState('user1'); // Replace with actual usernames
  const [receiver, setReceiver] = useState('user2'); // Replace with actual usernames
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/messages', {
          params: { sender, receiver },
        });
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    fetchMessages();
  }, [sender, receiver]);

  const sendMessage = async () => {
    try {
      await axios.post('/send-message', {
        sender,
        receiver,
        content: newMessage,
      });
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <h1>Chat between {sender} and {receiver}</h1>
      <div>
        {messages.map((message) => (
          <div key={message._id}>
            <p>{message.content}</p>
            <small>{message.sender} - {new Date(message.timestamp).toLocaleString()}</small>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Sidebar;
