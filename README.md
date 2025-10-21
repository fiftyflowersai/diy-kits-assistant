# 🌸 DIY Kits Assistant

A beautiful, responsive web application that connects to OpenAI Agent Builder workflow using ChatKit to help customers explore floral arrangement kits.

**🔒 Secure Authentication**: Uses OpenAI's domain whitelist - no API keys in the code!

## 🚀 Quick Start

### 1. Deploy to GitHub Pages

#### Option A: Via GitHub Web Interface
1. Push these files to your GitHub repository:
   ```bash
   git add .
   git commit -m "Add DIY Kits Assistant"
   git push origin main
   ```
2. Go to your repository on GitHub
3. Click **Settings** → **Pages** (in the left sidebar)
4. Under "Source", select your branch (usually `main`)
5. Click **Save**
6. Note your GitHub Pages URL: `https://[username].github.io/[repo-name]/`

#### Option B: Quick Command Line
```bash
git add .
git commit -m "Deploy DIY Kits Assistant"
git push origin main
# Then enable Pages in repository Settings → Pages
```

### 2. Whitelist Your Domain in OpenAI

**This is required for the app to work!**

1. Go to [OpenAI Agent Builder](https://platform.openai.com/agent-builder)
2. Select your workflow: `wf_68f6ab81d6f88190a1dec39a2e92d45e0f1a0f65064df00b`
3. Navigate to **Settings** or **Configuration**
4. Find the **Allowed Domains** or **Domain Whitelist** section
5. Add your GitHub Pages domain:
   - Format: `[username].github.io` (without https://)
   - Example: `baylorharrison.github.io`
6. **Save** the changes

### 3. Test Your App

1. Visit your GitHub Pages URL
2. Try the example questions or type your own
3. The chat should connect to your OpenAI workflow

**For Local Testing**: Add `localhost` to your OpenAI allowed domains list, then open `index.html` in your browser.

## ✨ Features

- **Beautiful UI**: Floral-themed design with soft pink and green colors
- **Responsive**: Works perfectly on mobile, tablet, and desktop
- **ChatKit Integration**: Connects to OpenAI Agent Builder workflow
- **Example Questions**: Quick-start buttons for common queries
- **Conversation Management**: Clear conversation history
- **Smart Formatting**: Preserves line breaks, bullet points, and emphasis
- **Loading States**: Visual feedback while agent is responding
- **Error Handling**: Friendly error messages for better UX

## 📋 Files

- `index.html` - Main page structure
- `style.css` - All styling and responsive design
- `app.js` - ChatKit integration and application logic

## 🔧 Configuration

The workflow is pre-configured in `app.js`:

```javascript
const CONFIG = {
    workflowId: 'wf_68f6ab81d6f88190a1dec39a2e92d45e0f1a0f65064df00b',
    version: '1',
    publicKey: 'domain_pk_68f6df7bf2888190bf6a77c5e40ae8bd090668efb04679ad'
};
```

### 🔒 Security & Authentication

This app uses **domain whitelist authentication** with a **public key** - the secure way to deploy client-side ChatKit apps:

✅ **Public key authentication** - safe to include in client-side code  
✅ **Domain-based access control** - only your approved domains work  
✅ **No private credentials exposed** - the public key is meant to be public  
✅ **Production-ready** - recommended by OpenAI for web apps

The authentication happens server-side at OpenAI, which verifies both the public key and that the request comes from an allowed domain.

## 🎨 Customization

### Colors
Edit the CSS variables in `style.css`:

```css
:root {
    --primary-pink: #f8b4d9;
    --soft-pink: #fce4ec;
    --primary-green: #81c784;
    /* ... more colors */
}
```

### Example Questions
Update the buttons in `index.html`:

```html
<button class="example-btn" data-question="Your question here">
    Your question here
</button>
```

## 🐛 Troubleshooting

### "Failed to initialize chat" or messages not sending
1. **Check domain whitelist**: Make sure your GitHub Pages domain is added in OpenAI Agent Builder
   - Go to your workflow settings in OpenAI
   - Verify the domain is exactly: `yourusername.github.io`
   - No `https://`, no `www.`, no trailing slash
2. **Check browser console** (F12) for detailed error messages
3. **Verify workflow ID** is correct in `app.js`

### ChatKit not loading
- Check your internet connection (ChatKit loads via CDN)
- Open browser console (F12) to see detailed error messages
- Try refreshing the page

### Works on localhost but not on GitHub Pages
- Double-check you added the correct GitHub Pages domain to OpenAI
- Make sure you're using the exact domain format: `username.github.io`
- Changes to domain whitelist may take a few minutes to propagate

### Domain authentication errors
- Confirm the domain whitelist includes your GitHub Pages URL
- For custom domains, add both the apex domain and www subdomain
- Remove any test domains like `*` or `localhost` in production

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is ready to use for your DIY Kits business!

---

**Built with ❤️ and 🌸**

