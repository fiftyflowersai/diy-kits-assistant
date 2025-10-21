import React, { useState } from 'react';
import { ChatKit, useChatKit } from '@openai/chatkit-react';

function App() {
  const [deviceId] = useState(() => {
    // Generate or retrieve device ID for session persistence
    let id = localStorage.getItem('chatkit_device_id');
    if (!id) {
      id = `device_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('chatkit_device_id', id);
    }
    return id;
  });

  const { control } = useChatKit({
    api: {
      async getClientSecret(existing) {
        // If there's an existing session that needs refresh
        if (existing) {
          console.log('Refreshing existing session...');
        }

        try {
          const res = await fetch('/api/chatkit/session', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ deviceId }),
          });

          if (!res.ok) {
            throw new Error(`Failed to get session: ${res.status}`);
          }

          const { client_secret } = await res.json();
          return client_secret;
        } catch (error) {
          console.error('Error getting ChatKit session:', error);
          throw error;
        }
      },
    },
    // Custom theme with floral colors
    theme: {
      primaryColor: '#f8b4d9',
      accentColor: '#e91e63',
      backgroundColor: '#fafafa',
      textColor: '#333333',
    },
  });

  const handleExampleClick = (question) => {
    // Send message to ChatKit
    if (control) {
      control.sendMessage(question);
    }
  };

  const handleClear = () => {
    if (confirm('Are you sure you want to clear the conversation?')) {
      // Clear the session
      localStorage.removeItem('chatkit_device_id');
      window.location.reload();
    }
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="title">
            <span className="flower-icon">🌸</span>
            DIY Kits Assistant
          </h1>
          <p className="subtitle">Ask me anything about our floral arrangement kits!</p>
        </div>
        <button onClick={handleClear} className="clear-btn" title="Clear conversation">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </header>

      {/* ChatKit Component */}
      <div className="chat-container">
        <ChatKit 
          control={control} 
          className="chatkit-widget"
        />
      </div>

      {/* Example Questions */}
      <div className="example-questions">
        <button 
          className="example-btn" 
          onClick={() => handleExampleClick("What's in Pretty in Pink medium combo?")}
        >
          What's in Pretty in Pink medium combo?
        </button>
        <button 
          className="example-btn" 
          onClick={() => handleExampleClick("Show all products")}
        >
          Show all products
        </button>
        <button 
          className="example-btn" 
          onClick={() => handleExampleClick("How many stems in Maple & Merlot large?")}
        >
          How many stems in Maple & Merlot large?
        </button>
      </div>
    </div>
  );
}

export default App;

