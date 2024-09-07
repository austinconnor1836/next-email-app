// components/ChatGPT.tsx
import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, CircularProgress } from '@mui/material';
import axios from 'axios';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatGPT: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post('/api/chat', { message: input });
      const assistantMessage: Message = { role: 'assistant', content: response.data.message };
      setMessages([...messages, userMessage, assistantMessage]);
    } catch (error) {
      console.error('Error fetching ChatGPT response:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <List>
        {messages.map((msg, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={msg.content}
              style={{ textAlign: msg.role === 'user' ? 'right' : 'left' }}
            />
          </ListItem>
        ))}
      </List>

      {loading && <CircularProgress />}

      <TextField
        label="Type a message"
        fullWidth
        variant="outlined"
        value={input}
        onChange={handleInputChange}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            handleSendMessage();
          }
        }}
        disabled={loading}
      />
      <Button
        onClick={handleSendMessage}
        variant="contained"
        fullWidth
        style={{ marginTop: '10px' }}
        disabled={loading}
      >
        Send
      </Button>
    </div>
  );
};

export default ChatGPT;
