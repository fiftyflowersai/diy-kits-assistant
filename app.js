// ============================================
// DIY Kits Assistant - ChatKit Integration
// ============================================

// Configuration
// This app uses OpenAI's domain whitelist for authentication.
// The public key is safe to include in client-side code.
// Just add your domains in OpenAI Agent Builder > Settings > Add Domain
const CONFIG = {
    workflowId: 'wf_68f6ab81d6f88190a1dec39a2e92d45e0f1a0f65064df00b',
    version: '1',
    publicKey: 'domain_pk_68f6df7bf2888190bf6a77c5e40ae8bd090668efb04679ad'
};

// State management
let chatClient = null;
let conversationHistory = [];

// DOM Elements
const chatContainer = document.getElementById('chatContainer');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const clearBtn = document.getElementById('clearBtn');
const loading = document.getElementById('loading');
const errorMessage = document.getElementById('errorMessage');
const exampleQuestions = document.querySelectorAll('.example-btn');

// ============================================
// Initialize ChatKit
// ============================================
function initializeChatKit() {
    try {
        // Initialize ChatKit client with domain whitelist authentication
        // Uses public key - authentication happens via domain whitelist
        if (window.OpenAI && window.OpenAI.ChatKit) {
            chatClient = new window.OpenAI.ChatKit({
                workflowId: CONFIG.workflowId,
                version: CONFIG.version,
                publicKey: CONFIG.publicKey
            });
            
            console.log('ChatKit initialized successfully with domain whitelist authentication');
            return true;
        } else {
            showError('ChatKit SDK not loaded. Please check your internet connection.');
            return false;
        }
    } catch (error) {
        console.error('Error initializing ChatKit:', error);
        showError('Failed to initialize chat. Make sure your domain is whitelisted in OpenAI Agent Builder.');
        return false;
    }
}

// ============================================
// Message Handling
// ============================================

async function sendMessage(messageText) {
    if (!messageText.trim()) return;
    
    // Disable input while processing
    setInputDisabled(true);
    
    // Add user message to chat
    addMessageToChat(messageText, 'user');
    
    // Clear input
    userInput.value = '';
    resetTextareaHeight();
    
    // Show loading indicator
    showLoading(true);
    
    try {
        // Send message to ChatKit
        const response = await chatClient.sendMessage({
            message: messageText,
            conversationHistory: conversationHistory
        });
        
        // Add agent response to chat
        if (response && response.message) {
            addMessageToChat(response.message, 'agent');
            
            // Update conversation history
            conversationHistory.push({
                role: 'user',
                content: messageText
            }, {
                role: 'assistant',
                content: response.message
            });
        } else {
            showError('Received an empty response from the assistant.');
        }
    } catch (error) {
        console.error('Error sending message:', error);
        showError('Failed to send message. Please try again.');
    } finally {
        showLoading(false);
        setInputDisabled(false);
        userInput.focus();
    }
}

function addMessageToChat(text, sender) {
    // Remove welcome message if present
    const welcomeMessage = chatContainer.querySelector('.welcome-message');
    if (welcomeMessage) {
        welcomeMessage.remove();
    }
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const bubbleDiv = document.createElement('div');
    bubbleDiv.className = 'message-bubble';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    // Format the message content
    contentDiv.innerHTML = formatMessage(text);
    
    bubbleDiv.appendChild(contentDiv);
    messageDiv.appendChild(bubbleDiv);
    chatContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    scrollToBottom();
}

function formatMessage(text) {
    // Convert line breaks to <br> tags
    let formatted = text.replace(/\n/g, '<br>');
    
    // Convert markdown-style bold **text** to <strong>
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Convert markdown-style italic *text* to <em>
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Convert markdown-style bullet points
    formatted = formatted.replace(/^[•\-\*]\s(.+)$/gm, '<li>$1</li>');
    
    // Wrap consecutive list items in <ul>
    formatted = formatted.replace(/(<li>.*<\/li>)/s, function(match) {
        return '<ul>' + match + '</ul>';
    });
    
    return formatted;
}

// ============================================
// UI Controls
// ============================================

function clearConversation() {
    // Confirm with user
    if (conversationHistory.length === 0) {
        return; // Nothing to clear
    }
    
    if (confirm('Are you sure you want to clear the conversation?')) {
        conversationHistory = [];
        chatContainer.innerHTML = `
            <div class="welcome-message">
                <div class="welcome-icon">🌺</div>
                <h2>Welcome to DIY Kits Assistant!</h2>
                <p>I'm here to help you explore our beautiful floral arrangement kits. Ask me about product details, what's included, or anything else you'd like to know!</p>
            </div>
        `;
    }
}

function setInputDisabled(disabled) {
    userInput.disabled = disabled;
    sendBtn.disabled = disabled;
}

function showLoading(show) {
    if (show) {
        loading.classList.add('active');
        scrollToBottom();
    } else {
        loading.classList.remove('active');
    }
}

function showError(message) {
    const errorText = errorMessage.querySelector('.error-text');
    errorText.textContent = message;
    errorMessage.classList.add('active');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        errorMessage.classList.remove('active');
    }, 5000);
}

function scrollToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function resetTextareaHeight() {
    userInput.style.height = 'auto';
}

function adjustTextareaHeight() {
    userInput.style.height = 'auto';
    userInput.style.height = Math.min(userInput.scrollHeight, 120) + 'px';
}

// ============================================
// Event Listeners
// ============================================

// Send button click
sendBtn.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message) {
        sendMessage(message);
    }
});

// Enter key to send (Shift+Enter for new line)
userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        const message = userInput.value.trim();
        if (message) {
            sendMessage(message);
        }
    }
});

// Auto-resize textarea
userInput.addEventListener('input', adjustTextareaHeight);

// Clear conversation button
clearBtn.addEventListener('click', clearConversation);

// Example question buttons
exampleQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
        const question = btn.getAttribute('data-question');
        userInput.value = question;
        adjustTextareaHeight();
        sendMessage(question);
    });
});

// Close error message
const errorClose = errorMessage.querySelector('.error-close');
errorClose.addEventListener('click', () => {
    errorMessage.classList.remove('active');
});

// ============================================
// Initialization
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('DIY Kits Assistant loaded');
    
    // Initialize ChatKit
    const initialized = initializeChatKit();
    
    if (initialized) {
        // Focus on input
        userInput.focus();
    }
});

// ============================================
// Notes on Domain Whitelist Authentication
// ============================================

// This application uses OpenAI's domain whitelist authentication, which is
// the recommended approach for client-side web applications. This method:
//
// ✅ No API keys exposed in client-side code
// ✅ More secure for public GitHub repos
// ✅ Prevents unauthorized usage
// ✅ Perfect for GitHub Pages deployment
//
// Setup Instructions:
// 1. Deploy this app to GitHub Pages
// 2. Go to OpenAI Agent Builder > Your Workflow > Settings
// 3. Add your GitHub Pages domain to the allowed domains list
//    Example: yourusername.github.io
// 4. Save and test!
//
// For local testing, add 'localhost' or '127.0.0.1' to your allowed domains.

