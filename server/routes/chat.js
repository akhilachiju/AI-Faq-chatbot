const { GoogleGenAI } = require('@google/genai');
const { buildFAQContext, findBestMatch } = require('../utils/helpers');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function handleChat(req, res) {
  try {
    const { message, language = 'en' } = req.body;
    
    const faqContext = buildFAQContext(language);
    const languageInstruction = language === 'de' 
      ? 'Antworte auf Deutsch.' 
      : 'Respond in English.';
    
    const systemPrompt = `You are AVA (Administrative Virtual Assistant), a helpful assistant for administrative support services. ${languageInstruction}

Use this FAQ knowledge base to answer questions:

${faqContext}

Guidelines:
- Be friendly and professional
- Keep responses concise
- Use emojis sparingly
- If asked about something not in the FAQs, politely say you can connect them with a team member
- Stay focused on administrative services`;

    let response;
    let retries = 3;
    let useFallback = false;
    
    while (retries > 0) {
      try {
        response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: `${systemPrompt}\n\nUser: ${message}`
        });
        break;
      } catch (error) {
        retries--;
        if (retries === 0) {
          console.log('AI failed, using fallback');
          useFallback = true;
          break;
        }
        if (error.status === 429 || error.status === 503) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        } else {
          throw error;
        }
      }
    }

    const responseMessage = useFallback 
      ? findBestMatch(message, language)
      : response?.text || findBestMatch(message, language);

    res.json({ 
      message: responseMessage,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error:', error);
    const { language: lang = 'en' } = req.body;
    const errorMsg = lang === 'de' 
      ? 'Entschuldigung, der Service ist momentan überlastet. Bitte versuchen Sie es in einem Moment erneut.'
      : 'Sorry, the service is currently overloaded. Please try again in a moment.';
    res.status(500).json({ 
      message: errorMsg,
      timestamp: new Date().toISOString()
    });
  }
}

module.exports = { handleChat };
