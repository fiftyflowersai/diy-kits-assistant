// ============================================
// DIY Kits Assistant - OpenAI Agent Embed
// ============================================

// Configuration
// This app uses OpenAI's official iframe embed with domain whitelist authentication.
// The public key is safe to include in client-side code.
// Just add your domains in OpenAI Agent Builder > Settings > Add Domain
const CONFIG = {
    workflowId: 'wf_68f6ab81d6f88190a1dec39a2e92d45e0f1a0f65064df00b',
    version: '1',
    publicKey: 'domain_pk_68f6df7bf2888190bf6a77c5e40ae8bd090668efb04679ad'
};

// DOM Elements
const chatIframe = document.getElementById('chatkit-iframe');
const clearBtn = document.getElementById('clearBtn');
const exampleQuestions = document.querySelectorAll('.example-btn');

// ============================================
// Example Question Handlers
// ============================================

// Send message to iframe via postMessage
function sendMessageToIframe(message) {
    if (chatIframe && chatIframe.contentWindow) {
        chatIframe.contentWindow.postMessage({
            type: 'sendMessage',
            message: message
        }, '*');
        
        console.log('Sent message to iframe:', message);
    }
}

// Example question buttons
exampleQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
        const question = btn.getAttribute('data-question');
        sendMessageToIframe(question);
    });
});

// ============================================
// Clear Conversation Handler
// ============================================

clearBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear the conversation?')) {
        // Reload the iframe to reset the conversation
        chatIframe.src = chatIframe.src;
        console.log('Conversation cleared - iframe reloaded');
    }
});

// ============================================
// Initialization
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('DIY Kits Assistant loaded');
    console.log('Using OpenAI Agent Embed');
    console.log('Workflow ID:', CONFIG.workflowId);
    console.log('Version:', CONFIG.version);
    
    // Listen for messages from iframe (optional - for future features)
    window.addEventListener('message', (event) => {
        // You can handle messages from the iframe here if needed
        console.log('Message from iframe:', event.data);
    });
    
    // Check if iframe loaded successfully
    chatIframe.addEventListener('load', () => {
        console.log('OpenAI Agent iframe loaded successfully');
    });
    
    chatIframe.addEventListener('error', () => {
        console.error('Error loading OpenAI Agent iframe');
    });
});

// ============================================
// Notes on OpenAI Agent Embed
// ============================================

// This application uses OpenAI's official Agent Embed iframe, which is
// the most reliable method for client-side web applications. This method:
//
// ✅ Official OpenAI embed method - guaranteed to work
// ✅ No CDN dependencies - direct connection to OpenAI
// ✅ Built-in chat UI - fully functional out of the box
// ✅ Domain whitelist authentication - secure and production-ready
// ✅ Public key is safe in client code - meant to be public
//
// Setup Instructions:
// 1. Deploy this app to GitHub Pages (or any hosting)
// 2. Go to OpenAI Agent Builder > Your Workflow > Settings
// 3. Add your domain to the allowed domains list
//    Example: yourusername.github.io
// 4. Save and test!
//
// The iframe handles:
// - Chat UI and styling
// - Message sending/receiving
// - Conversation history
// - Error handling
// - Authentication via domain whitelist
//
// For local testing, add your domain to OpenAI's allowed domains:
// - For localhost: add 'localhost:8000' or '127.0.0.1:8000'
// - For GitHub Pages: add 'yourusername.github.io'
