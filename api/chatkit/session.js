// ============================================
// ChatKit Session Generator - Vercel Serverless Function
// ============================================
// This endpoint creates ChatKit sessions and returns client secrets
// for the frontend to use with the ChatKit React component.

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  // CORS headers for frontend access
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Get OpenAI API key from environment
  const apiKey = process.env.OPENAI_API_KEY;
  
  if (!apiKey) {
    console.error('OPENAI_API_KEY not found in environment variables');
    return res.status(500).json({ 
      error: 'Server configuration error: Missing API key' 
    });
  }

  try {
    // Generate a unique device ID for the user (optional)
    // You can use the user's session ID or generate one
    const deviceId = req.body?.deviceId || `user_${Date.now()}`;

    // Call OpenAI API to create ChatKit session
    const response = await fetch('https://api.openai.com/v1/chatkit/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'OpenAI-Beta': 'chatkit_beta=v1',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        workflow: { 
          id: 'wf_68f6ab81d6f88190a1dec39a2e92d45e0f1a0f65064df00b' 
        },
        user: deviceId,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenAI API error:', response.status, errorData);
      return res.status(response.status).json({ 
        error: 'Failed to create ChatKit session',
        details: errorData 
      });
    }

    const data = await response.json();
    
    // Return the client secret to the frontend
    return res.status(200).json({ 
      client_secret: data.client_secret 
    });

  } catch (error) {
    console.error('Error creating ChatKit session:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
}

