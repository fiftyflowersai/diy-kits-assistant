# 🌸 DIY Kits Assistant - ChatKit Version

A beautiful floral arrangement assistant powered by OpenAI's ChatKit, deployed on Vercel with serverless backend.

## ✨ Features

- 🤖 **OpenAI ChatKit Integration** - Advanced conversational AI for floral arrangement assistance
- 🎨 **Beautiful UI** - Custom floral-themed design with gradient backgrounds
- ⚡ **Serverless Backend** - Vercel serverless functions for session management
- 🔐 **Secure** - API keys stored in environment variables, never exposed to frontend
- 📱 **Responsive** - Works perfectly on desktop, tablet, and mobile
- 🌺 **Custom Theme** - Floral color palette integrated with ChatKit

## 🚀 Tech Stack

- **Frontend**: React 18 + Vite
- **UI Library**: ChatKit React (@openai/chatkit-react)
- **Backend**: Vercel Serverless Functions
- **Deployment**: Vercel
- **AI**: OpenAI ChatKit

## 📁 Project Structure

```
diy-kits-assistant/
├── api/
│   └── chatkit/
│       └── session.js          # Serverless function for session generation
├── src/
│   ├── App.jsx                 # Main React component with ChatKit
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
├── index.html                  # HTML entry point
├── package.json                # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── vercel.json                # Vercel deployment config
└── .env.example               # Environment variables template
```

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd diy-kits-assistant
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` and add your OpenAI API key:

```
OPENAI_API_KEY=sk-proj-your-actual-api-key-here
```

Get your API key from: https://platform.openai.com/api-keys

### 4. Run Locally

```bash
npm run dev
```

The app will open at `http://localhost:5173`

**Note**: The serverless function won't work locally unless you use Vercel CLI:

```bash
npm install -g vercel
vercel dev
```

### 5. Deploy to Vercel

#### Option A: Vercel CLI

```bash
vercel
```

#### Option B: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Add environment variable: `OPENAI_API_KEY`
4. Deploy!

### 6. Set Environment Variable in Vercel

After deploying, add your environment variable:

1. Go to your project in Vercel Dashboard
2. Settings → Environment Variables
3. Add: `OPENAI_API_KEY` = `sk-proj-your-actual-api-key`
4. Redeploy the project

## 🔧 Configuration

### Workflow ID

The ChatKit workflow is configured in `/api/chatkit/session.js`:

```javascript
workflow: { 
  id: 'wf_68f6ab81d6f88190a1dec39a2e92d45e0f1a0f65064df00b' 
}
```

### Custom Theme

The floral theme is configured in `/src/App.jsx`:

```javascript
theme: {
  primaryColor: '#f8b4d9',
  accentColor: '#e91e63',
  backgroundColor: '#fafafa',
  textColor: '#333333',
}
```

## 📝 How It Works

1. **Frontend loads** → User opens the app
2. **ChatKit initializes** → Calls `getClientSecret()` function
3. **Backend request** → Frontend calls `/api/chatkit/session`
4. **OpenAI API call** → Serverless function creates ChatKit session
5. **Session returns** → Backend sends `client_secret` to frontend
6. **Chat active** → ChatKit component renders with active session

## 🌐 API Endpoints

### POST `/api/chatkit/session`

Creates a new ChatKit session and returns a client secret.

**Request**:
```json
{
  "deviceId": "optional-device-identifier"
}
```

**Response**:
```json
{
  "client_secret": "chatkit_secret_xyz..."
}
```

## 🎨 Customization

### Change Colors

Edit `src/index.css` to modify the color palette:

```css
:root {
    --primary-pink: #f8b4d9;
    --soft-pink: #fce4ec;
    --accent-pink: #e91e63;
    --primary-green: #81c784;
    --soft-green: #e8f5e9;
}
```

### Modify Example Questions

Edit `src/App.jsx` to change the example questions:

```jsx
<button 
  className="example-btn" 
  onClick={() => handleExampleClick("Your custom question")}
>
  Your custom question
</button>
```

## 🐛 Troubleshooting

### ChatKit not loading?

1. Check browser console for errors
2. Verify OpenAI API key is set in Vercel
3. Ensure ChatKit script is loaded: check Network tab for `chatkit.js`

### Session creation fails?

1. Check `/api/chatkit/session` is accessible
2. Verify environment variable `OPENAI_API_KEY` is set
3. Check Vercel function logs in dashboard

### Local development not working?

Use Vercel CLI for local testing:
```bash
vercel dev
```

## 📚 Resources

- [ChatKit Documentation](https://platform.openai.com/docs/chatkit)
- [Vercel Documentation](https://vercel.com/docs)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)

## 📄 License

MIT License - feel free to use this for your own projects!

## 🙋‍♀️ Support

For issues or questions:
1. Check the troubleshooting section above
2. Review ChatKit documentation
3. Check Vercel function logs
4. Open an issue in this repository

---

Built with 💐 using OpenAI ChatKit
