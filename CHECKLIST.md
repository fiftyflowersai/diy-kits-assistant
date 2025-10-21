# ✅ Setup & Deployment Checklist

Use this checklist to ensure everything is set up correctly!

## 📋 Pre-Deployment Checklist

### 1. Local Development Setup

- [ ] Node.js installed (v18 or higher)
  ```bash
  node --version
  ```

- [ ] Dependencies installed
  ```bash
  npm install
  ```

- [ ] Environment file created
  ```bash
  cp env.example .env
  ```

- [ ] OpenAI API key added to `.env`
  ```
  OPENAI_API_KEY=sk-proj-your-actual-key-here
  ```

- [ ] Vercel CLI installed (for local testing)
  ```bash
  npm install -g vercel
  ```

- [ ] App runs locally
  ```bash
  vercel dev
  ```
  Visit: http://localhost:3000

### 2. Test Local Functionality

- [ ] App loads without errors
- [ ] ChatKit widget appears in the chat container
- [ ] Example question buttons are visible
- [ ] Clicking example button sends message
- [ ] Chat responds to questions
- [ ] Clear conversation button works
- [ ] No errors in browser console
- [ ] No errors in terminal/Vercel dev logs

### 3. Code Quality

- [ ] No linter errors
  ```bash
  npm run build
  ```

- [ ] Git repository initialized
  ```bash
  git init
  ```

- [ ] `.env` is in `.gitignore` (verify!)
  ```bash
  cat .gitignore | grep .env
  ```

- [ ] All files committed
  ```bash
  git add .
  git commit -m "Initial commit - Vercel ChatKit version"
  ```

- [ ] Pushed to GitHub
  ```bash
  git remote add origin <your-repo-url>
  git push -u origin main
  ```

---

## 🚀 Deployment Checklist

### 1. Vercel Account Setup

- [ ] Vercel account created at [vercel.com](https://vercel.com)
- [ ] GitHub connected to Vercel
- [ ] Project imported to Vercel

### 2. Vercel Configuration

- [ ] Framework preset: **Vite** (auto-detected)
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Install command: `npm install`

### 3. Environment Variables (CRITICAL!)

- [ ] `OPENAI_API_KEY` added in Vercel
  - Dashboard → Project → Settings → Environment Variables
  - Name: `OPENAI_API_KEY`
  - Value: `sk-proj-your-actual-key`
  - Environments: ✅ Production ✅ Preview ✅ Development

- [ ] Environment variable saved
- [ ] Project redeployed after adding variable

### 4. Deployment

- [ ] First deployment successful
- [ ] Build logs show no errors
- [ ] Function logs show no errors

### 5. Production Testing

- [ ] Visit production URL: `https://your-project.vercel.app`
- [ ] App loads correctly
- [ ] ChatKit widget appears
- [ ] Example questions work
- [ ] Chat responds to messages
- [ ] Clear button works
- [ ] Test on mobile device
- [ ] Test on different browsers (Chrome, Safari, Firefox)

---

## 🔐 Security Checklist

- [ ] `.env` file NOT committed to Git
  ```bash
  git ls-files | grep .env
  # Should return nothing
  ```

- [ ] API key only in Vercel environment variables
- [ ] No API keys in source code
- [ ] `.gitignore` includes `.env`
- [ ] Repository is private (or API key is rotated if public)

---

## 📊 Monitoring Checklist

### 1. Vercel Monitoring

- [ ] Deployment successful (green checkmark)
- [ ] Functions working: `/api/chatkit/session`
  - Dashboard → Functions → View logs
  - Should show successful session creations

- [ ] No errors in function logs
- [ ] Analytics enabled (optional)

### 2. OpenAI Monitoring

- [ ] Check OpenAI usage dashboard
  - Visit: https://platform.openai.com/usage
  - Verify ChatKit API calls are being logged
  - Monitor token usage

- [ ] Set up billing alerts (recommended)
  - OpenAI Dashboard → Settings → Billing
  - Set spending limits

---

## 🎨 Customization Checklist (Optional)

- [ ] Custom domain added (if desired)
  - Vercel → Project → Settings → Domains

- [ ] Theme customized
  - Edit `src/App.jsx` → `theme` object

- [ ] Example questions updated
  - Edit `src/App.jsx` → button text & handlers

- [ ] Colors adjusted
  - Edit `src/index.css` → `:root` variables

- [ ] Workflow updated (if needed)
  - Edit `api/chatkit/session.js` → workflow ID

---

## 🐛 Troubleshooting Checklist

If something's not working, check:

### ChatKit Not Loading
- [ ] ChatKit script loaded? (Check Network tab → `chatkit.js`)
- [ ] Browser console errors? (F12 → Console)
- [ ] API key set in Vercel?
- [ ] Session endpoint working? (Network tab → `/api/chatkit/session`)

### Session Creation Fails
- [ ] Environment variable set correctly?
- [ ] API key valid? (Test in OpenAI Playground)
- [ ] Workflow ID correct?
- [ ] Check Vercel function logs

### Build Fails
- [ ] Dependencies installed? (`npm install`)
- [ ] No syntax errors? (`npm run build`)
- [ ] Check build logs in Vercel

### Local Development Issues
- [ ] Using `vercel dev` (not `npm run dev`)?
- [ ] Vercel CLI installed? (`npm install -g vercel`)
- [ ] `.env` file exists with API key?

---

## 📚 Documentation Checklist

Have you read:

- [ ] `QUICKSTART.md` - Quick start guide
- [ ] `README.md` - Full documentation
- [ ] `DEPLOYMENT.md` - Detailed deployment guide
- [ ] `MIGRATION_SUMMARY.md` - What changed
- [ ] `HOW_IT_WORKS.md` - Architecture deep dive

---

## 🎉 Success Checklist

You're ready to go live when:

- [ ] ✅ All local tests pass
- [ ] ✅ All production tests pass
- [ ] ✅ No errors in logs
- [ ] ✅ Environment variables set
- [ ] ✅ Security verified
- [ ] ✅ Monitoring in place
- [ ] ✅ Documentation reviewed

---

## 🚀 Post-Launch Checklist

After going live:

- [ ] Share URL with test users
- [ ] Monitor error logs for 24 hours
- [ ] Check OpenAI usage/costs
- [ ] Gather user feedback
- [ ] Document any issues
- [ ] Plan iterations based on feedback

---

## 📈 Ongoing Maintenance

Weekly:
- [ ] Check Vercel function logs
- [ ] Review OpenAI usage
- [ ] Monitor costs

Monthly:
- [ ] Review and optimize prompts in Agent Builder
- [ ] Update dependencies (`npm update`)
- [ ] Review user feedback
- [ ] Plan new features

---

## 🆘 Need Help?

If you're stuck on any checklist item:

1. ✅ Check the relevant documentation file
2. ✅ Review Vercel logs (Dashboard → Functions)
3. ✅ Check browser console (F12)
4. ✅ Review ChatKit docs: https://platform.openai.com/docs/chatkit
5. ✅ Review Vercel docs: https://vercel.com/docs

---

**Print this checklist and check items off as you go!** 📋✨

Good luck! 🌸

