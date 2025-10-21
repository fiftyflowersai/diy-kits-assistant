# 🚀 Deployment Guide - DIY Kits Assistant on Vercel

This guide will walk you through deploying your ChatKit-powered DIY Kits Assistant to Vercel.

## 📋 Prerequisites

Before you begin, make sure you have:

- ✅ A [Vercel account](https://vercel.com/signup) (free)
- ✅ An [OpenAI API key](https://platform.openai.com/api-keys)
- ✅ Your code pushed to GitHub
- ✅ ChatKit workflow ID: `wf_68f6ab81d6f88190a1dec39a2e92d45e0f1a0f65064df00b`

## 🎯 Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

#### Step 1: Import Project

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Vercel will auto-detect it as a Vite project

#### Step 2: Configure Build Settings

Vercel should automatically detect these settings, but verify:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

#### Step 3: Add Environment Variables

**CRITICAL**: Before deploying, add your environment variable:

1. Scroll down to **Environment Variables** section
2. Add the following:
   - **Name**: `OPENAI_API_KEY`
   - **Value**: `sk-proj-your-actual-openai-api-key`
   - **Environment**: Select all (Production, Preview, Development)
3. Click **"Add"**

#### Step 4: Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (usually 1-2 minutes)
3. Your app will be live at: `https://your-project-name.vercel.app`

#### Step 5: Test Your Deployment

1. Visit your deployed URL
2. The ChatKit widget should load
3. Try asking a question about floral arrangements
4. Check the example question buttons work

---

### Option 2: Deploy via Vercel CLI

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

#### Step 3: Deploy

From your project directory:

```bash
vercel
```

Follow the prompts:
- Link to existing project? **N** (first time)
- Project name? **diy-kits-assistant** (or your choice)
- Directory? **./** (current directory)

#### Step 4: Add Environment Variable

```bash
vercel env add OPENAI_API_KEY
```

Paste your OpenAI API key when prompted.

Select environments: **Production, Preview, Development** (use arrow keys + space)

#### Step 5: Deploy to Production

```bash
vercel --prod
```

---

## 🔧 Post-Deployment Configuration

### Set Up Custom Domain (Optional)

1. In Vercel Dashboard → Your Project → **Settings** → **Domains**
2. Add your custom domain (e.g., `chat.yourdomain.com`)
3. Follow DNS configuration instructions

### Environment Variables Management

To update your API key later:

1. Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
2. Edit or delete existing variables
3. Redeploy for changes to take effect

---

## 🐛 Troubleshooting

### Issue: "Failed to create ChatKit session"

**Cause**: OpenAI API key not set or invalid

**Solution**:
1. Check Vercel Dashboard → Settings → Environment Variables
2. Verify `OPENAI_API_KEY` is set correctly
3. Ensure API key starts with `sk-proj-` or `sk-`
4. Redeploy the project

### Issue: ChatKit widget not loading

**Cause**: ChatKit script not loading or blocked

**Solution**:
1. Open browser console (F12)
2. Check for errors related to `chatkit.js`
3. Verify the script URL in `index.html` is correct
4. Check if ad blockers are interfering

### Issue: Build fails

**Cause**: Missing dependencies or configuration issue

**Solution**:
1. Check Vercel build logs
2. Verify `package.json` has all dependencies
3. Try building locally: `npm run build`
4. Check for errors in `vite.config.js`

### Issue: API endpoint returns 500 error

**Cause**: Serverless function error

**Solution**:
1. Check Vercel function logs: Project → Functions → `/api/chatkit/session`
2. Verify workflow ID is correct in `api/chatkit/session.js`
3. Test API key locally with Vercel CLI: `vercel dev`

---

## 📊 Monitoring

### View Logs

**Function Logs**:
1. Vercel Dashboard → Your Project → **Functions**
2. Click on `/api/chatkit/session`
3. View real-time logs

**Deployment Logs**:
1. Vercel Dashboard → Your Project → **Deployments**
2. Click on a deployment
3. View build and runtime logs

### Analytics

Enable Vercel Analytics (optional):
1. Vercel Dashboard → Your Project → **Analytics**
2. Click **Enable Analytics**
3. View visitor stats and performance metrics

---

## 🔄 Updating Your Deployment

### Automatic Deployments (Recommended)

Vercel automatically redeploys when you push to GitHub:

```bash
git add .
git commit -m "Update feature"
git push origin main
```

Vercel will automatically:
- Detect the push
- Build the new version
- Deploy to production

### Manual Deployments

Using Vercel CLI:

```bash
vercel --prod
```

---

## 🔐 Security Best Practices

1. **Never commit `.env` file** - It's in `.gitignore`
2. **Use environment variables** - Never hardcode API keys
3. **Rotate API keys periodically** - Update in Vercel settings
4. **Enable HTTPS** - Vercel provides this by default
5. **Monitor API usage** - Check OpenAI dashboard regularly

---

## 💰 Cost Considerations

### Vercel Costs
- **Hobby Plan**: Free (perfect for this project)
- **Pro Plan**: $20/month (if you need more)

### OpenAI Costs
- ChatKit usage is billed based on:
  - Number of sessions created
  - Tokens used in conversations
- Monitor usage: [OpenAI Usage Dashboard](https://platform.openai.com/usage)

---

## 🚦 Testing Before Production

### Preview Deployments

Every pull request and branch gets a preview deployment:

```bash
git checkout -b feature/new-questions
# Make changes
git push origin feature/new-questions
```

Vercel creates a preview URL: `https://your-project-name-git-feature-new-questions.vercel.app`

Test thoroughly before merging to main!

---

## 📝 Deployment Checklist

Before going live:

- [ ] OpenAI API key added to Vercel environment variables
- [ ] Test the deployment on the Vercel preview URL
- [ ] Verify ChatKit widget loads correctly
- [ ] Test example question buttons
- [ ] Check mobile responsiveness
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Monitor API costs in OpenAI dashboard
- [ ] Set up custom domain (if desired)
- [ ] Enable Vercel Analytics (optional)
- [ ] Test error handling (invalid questions, etc.)

---

## 🆘 Getting Help

If you encounter issues:

1. **Check Vercel Logs**: Most errors are visible in function logs
2. **ChatKit Docs**: https://platform.openai.com/docs/chatkit
3. **Vercel Docs**: https://vercel.com/docs
4. **OpenAI Support**: https://help.openai.com
5. **Vercel Support**: https://vercel.com/support

---

## 🎉 Success!

Your DIY Kits Assistant is now live on Vercel! 🌸

- **Production URL**: `https://your-project-name.vercel.app`
- **API Endpoint**: `https://your-project-name.vercel.app/api/chatkit/session`

Share your assistant with users and enjoy the beautiful ChatKit experience!

---

## 📈 Next Steps

After deployment:

1. **Monitor Usage**: Keep an eye on OpenAI API usage
2. **Gather Feedback**: Ask users what they think
3. **Iterate**: Add more features based on feedback
4. **Optimize**: Improve prompts in Agent Builder
5. **Scale**: Upgrade Vercel plan if needed

Happy deploying! 🚀
