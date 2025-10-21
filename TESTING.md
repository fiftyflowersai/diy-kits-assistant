# 🧪 ChatKit Integration Testing Guide

I've created **two versions** for you to test, since the exact ChatKit CDN URL may vary.

## 📋 Files Created

### **Option 1: Script-Based Integration** (Try this first)
- **File:** `index.html` ✅ Updated
- **CDN:** `https://cdn.chatkit.com/v1/chatkit.js`
- **Method:** JavaScript initialization with `window.ChatKit.config`

### **Option 2: Iframe Embed** (Fallback if Option 1 doesn't work)
- **File:** `index-iframe.html` ✅ New file created
- **Method:** Direct iframe embed from OpenAI

---

## 🚀 Testing Instructions

Your local server is running at: **http://localhost:8000**

### **Step 1: Test Script-Based Integration**

1. Open: **http://localhost:8000** (or **http://localhost:8000/index.html**)
2. Open browser console (F12)
3. Look for these messages:
   - ✅ "ChatKit initialized successfully with domain whitelist authentication"
   - ✅ "Config: {workflowId: ..., version: ..., publicKey: ...}"
   - ❌ "ChatKit SDK not loaded" or network errors

**If you see success messages:**
- Try sending a message with the example buttons
- Check if the chat works properly

**If you see errors:**
- Note the error message
- Move to Step 2 (iframe version)

### **Step 2: Test Iframe Embed** (if Step 1 failed)

1. Open: **http://localhost:8000/index-iframe.html**
2. You should see OpenAI's embedded chat interface load directly
3. The iframe handles all the chat UI - no custom JavaScript needed

---

## 🔍 What to Look For

### **In Browser Console (F12):**

✅ **Good Signs:**
```
ChatKit initialized successfully with domain whitelist authentication
Config: {workflowId: "wf_...", version: "1", publicKey: "domain_pk_..."}
```

❌ **Bad Signs:**
```
ChatKit SDK not loaded
Failed to load resource: net::ERR_NAME_NOT_RESOLVED
404 Not Found
```

### **In Network Tab (F12 → Network):**

- Check if `chatkit.js` loads successfully (should be 200 status)
- Look for requests to OpenAI's API
- Check for CORS errors

---

## 📊 Which Version Works?

After testing, let me know:

1. **Does `index.html` work?** (Script-based)
   - Console shows ChatKit initialized?
   - Can send/receive messages?

2. **Does `index-iframe.html` work?** (Iframe embed)
   - Iframe loads the chat interface?
   - Can interact with the chat?

3. **What errors do you see?** (if any)
   - Console errors
   - Network errors
   - Visual issues

---

## 🔧 Current Setup

Both versions use:
- **Workflow ID:** `wf_68f6ab81d6f88190a1dec39a2e92d45e0f1a0f65064df00b`
- **Version:** `1`
- **Public Key:** `domain_pk_68f6df7bf2888190bf6a77c5e40ae8bd090668efb04679ad`

### Domains to Whitelist:

For local testing:
- `localhost:8000`
- `127.0.0.1:8000`

For production:
- `baylorharrison.github.io`

---

## 💡 Next Steps

Once we know which version works:

1. **If Script-based works:** Keep `index.html`, delete `index-iframe.html`
2. **If Iframe works:** Rename `index-iframe.html` → `index.html`
3. **Update README** with the working method
4. **Deploy to GitHub Pages**

---

## 🐛 Common Issues

### "ChatKit SDK not loaded"
- The CDN URL might be incorrect
- Use the iframe version instead

### "Failed to initialize chat"
- Domain not whitelisted in OpenAI
- Add `localhost:8000` to allowed domains

### Network Errors / 404
- The ChatKit CDN might not exist at that URL
- OpenAI may use a different distribution method
- Use iframe embed as the reliable fallback

---

**Ready to test!** Open http://localhost:8000 in your browser and let me know what you see! 🌸

