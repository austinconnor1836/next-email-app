'use client'
import { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

export default function Home() {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [html, setHtml] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ to, subject, text, html }),
    });

    const data = await response.json();
    alert(data.message);
  };

  return (
    <Container className="flex flex-col items-center justify-center min-h-screen py-8 bg-gradient-to-b from-gray-200 to-gray-300">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <Typography variant="h4" component="h1" gutterBottom className="text-2xl font-bold mb-6">
          Send Email
        </Typography>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            label="To"
            type="email"
            fullWidth
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
          />
          <TextField
            label="Subject"
            type="text"
            fullWidth
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <TextField
            label="Text"
            multiline
            rows={4}
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          {/* <TextField
            label="HTML"
            multiline
            rows={4}
            fullWidth
            value={html}
            onChange={(e) => setHtml(e.target.value)}
          /> */}
          <Button type="submit" fullWidth variant="contained" color="primary">
            Send Email
          </Button>
        </form>
      </div>
    </Container>
  );
}
