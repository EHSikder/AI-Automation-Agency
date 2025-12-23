
import { GoogleGenAI, Type } from "@google/genai";
import { CONTENT, COMPANY_INFO } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const supportEmailTool = {
  name: 'sendEmailToSupport',
  parameters: {
    type: Type.OBJECT,
    description: 'Sends a message or notification to the RIWA AI support team (ekramhosain0091@gmail.com) when the AI cannot answer a question or a human is requested.',
    properties: {
      user_query: {
        type: Type.STRING,
        description: 'The specific question or request from the user that needs human attention.',
      },
      context: {
        type: Type.STRING,
        description: 'Relevant context from the conversation to help the support team.',
      }
    },
    required: ['user_query'],
  },
};

export const generateResponse = async (userMessage: string, lang: 'en' | 'ar', history: { role: 'user' | 'model'; parts: { text: string }[] }[] = []) => {
  if (!process.env.API_KEY) {
    return { 
      text: lang === 'en' 
        ? "Demo Mode: API Key missing. I'm unable to connect to my brain." 
        : "وضع تجريبي: مفتاح API مفقود. لا يمكنني الاتصال بدماغي."
    };
  }

  try {
    const contextEn = JSON.stringify(CONTENT.en);
    const contextAr = JSON.stringify(CONTENT.ar);
    
    const systemPrompt = `You are the Official AI Brand Representative for RIWA AI.
    
    YOUR PRIMARY ROLE:
    Answer visitor questions accurately based ONLY on the website information provided below.
    
    WEBSITE KNOWLEDGE (ENGLISH):
    ${contextEn}

    WEBSITE KNOWLEDGE (ARABIC):
    ${contextAr}

    KEY COMPANY INFO:
    - Name: ${COMPANY_INFO.name}
    - Services: Voice Agents, WhatsApp Automation, Lead Scraping, AI Sales Closers, Social Media Management, AI Design Studio, POS Integrations.
    - Official Email for Escalation: ekramhosain0091@gmail.com
    - WhatsApp: ${COMPANY_INFO.phone}

    BEHAVIORAL RULES:
    1. GROUNDING: Strictly use the provided website content. If information is missing, do not guess.
    2. ESCALATION: If you cannot answer a question based on the content, you MUST say exactly: "I am connecting your message with our team." AND call the 'sendEmailToSupport' tool.
    3. LANGUAGE: Respond in the language used by the user (English or Arabic). If Arabic, use a professional tone with Gulf (Khaleeji) nuances where appropriate.
    4. BREVITY: Keep all responses professional and under 60 words.
    5. DIRECTNESS: If asked about booking, direct them to the "Book Strategy Call" buttons on the site.

    If the user requests a human or asks a complex technical question outside these docs, invoke the escalation tool immediately.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp',
      contents: [...history, { role: 'user', parts: [{ text: userMessage }] }],
      config: {
        systemInstruction: systemPrompt,
        tools: [{ functionDeclarations: [supportEmailTool] }],
      }
    });

    const functionCalls = response.functionCalls;
    const text = response.text;

    return { text, functionCalls };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return { 
      text: lang === 'en' 
        ? "Sorry, I'm having trouble connecting right now." 
        : "عذراً، أواجه مشكلة في الاتصال حالياً." 
    };
  }
};
