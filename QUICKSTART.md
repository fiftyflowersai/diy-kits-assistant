# ⚡ Quick Start Guide

Get your DIY Kits Assistant running in 5 minutes!

## 🏃‍♂️ Fast Track to Running Locally

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variable

Create a `.env` file:

```bash
cp env.example .env
```

Edit `.env` and add your OpenAI API key:

```
OPENAI_API_KEY=sk-proj-your-actual-key-here
```

Get your API key from: https://platform.openai.com/api-keys

### 3. Run Development Server

```bash
npm run dev
```

**Note**: For the serverless function to work locally, you need Vercel CLI:

```bash
npm install -g vercel
vercel dev
```

Your app will be at: http://localhost:3000

## 🚀 Deploy to Vercel (2 minutes)

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/diy-kits-assistant)

### Option 2: Manual Deploy

```bash
npm install -g vercel
vercel
```

**IMPORTANT**: After deploying, add your environment variable in Vercel Dashboard:

1. Go to your project → Settings → Environment Variables
2. Add: `OPENAI_API_KEY` = `sk-proj-your-key`
3. Redeploy

## 🧪 Test Your Setup

Visit your app and try:

1. Click an example question button
2. Type a custom question about floral arrangements
3. Test the clear conversation button

## 📁 Project Structure Overview

```
diy-kits-assistant/
├── api/chatkit/session.js    # Backend: Creates ChatKit sessions
├── src/
│   ├── App.jsx               # Frontend: React ChatKit component
│   ├── main.jsx              # React entry point
│   └── index.css             # Styles
├── index.html                # HTML entry
├── package.json              # Dependencies
└── vercel.json              # Vercel config
```

## 🔧 Configuration

### Change Workflow ID

Edit `api/chatkit/session.js`:

```javascript
workflow: { 
  id: 'your-workflow-id-here' 
}
```

### Customize Theme

Edit `src/App.jsx`:

```javascript
theme: {
  primaryColor: '#f8b4d9',
  accentColor: '#e91e63',
}
```

### Modify Example Questions

Edit `src/App.jsx`:

```jsx
<button 
  onClick={() => handleExampleClick("Your question")}
>
  Your question
</button>
```

## ❓ Common Issues

**ChatKit not loading?**
- Check browser console for errors
- Verify OpenAI API key is correct
- Ensure ChatKit script loaded (check Network tab)

**Session creation fails?**
- Verify `/api/chatkit/session` is accessible
- Check environment variable is set
- Review Vercel function logs

**Local development not working?**
- Use `vercel dev` instead of `npm run dev`
- This runs serverless functions locally

## 📚 Next Steps

- ✅ Read [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment guide
- ✅ Read [README.md](./README.md) for full documentation
- ✅ Customize your theme and branding
- ✅ Modify example questions
- ✅ Test and deploy!

## 🆘 Need Help?

1. Check [DEPLOYMENT.md](./DEPLOYMENT.md) troubleshooting section
2. Review [ChatKit docs](https://platform.openai.com/docs/chatkit)
3. Check Vercel logs if deployed

---

Happy building! 🌸

