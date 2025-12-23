
import { GoogleGenAI, Type } from "@google/genai";
import { CONTENT, COMPANY_INFO } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const supportEmailTool = {
  name: 'sendEmailToSupport',
  parameters: {
    type: Type.OBJECT,
    description: 'Sends a message or notification to the RIWA AI support team when the AI cannot answer a question or a human is requested.',
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
    const context = lang === 'en' ? JSON.stringify(CONTENT.en) : JSON.stringify(CONTENT.ar);
    const systemPrompt = `You are the Official AI Brand Representative for RIWA AI.
    
    COMPANY KNOWLEDGE:
    - Name: ${COMPANY_INFO.name}
    - Services: Voice Agents, WhatsApp Automation, B2B Scraping, AI Sales Closers, Social Media Management, AI Design, Full-Stack POS Integrations.
    - Markets: UAE, KSA, Kuwait, Qatar.
    - Contact: ${COMPANY_INFO.email}, ${COMPANY_INFO.phone}.
    - Site Content: ${context}

    OPERATIONAL RULES:
    1. Always answer based on the provided site content.
    2. Be professional, concise (max 60 words), and Khaleeji-market focused.
    3. LANGUAGE: If asked in Arabic, use professional Arabic with a hint of Gulf dialect where appropriate. If English, use professional business English.
    4. ESCALATION: If you cannot answer a question or if the user asks for things not mentioned in the services, you MUST say: "I am connecting your message with our team." AND use the 'sendEmailToSupport' tool.
    5. NEVER make up pricing or capabilities not listed in the context.
    6. If a human is requested, use the tool and confirm escalation.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [...history, { role: 'user', parts: [{ text: userMessage }] }],
      config: {
        systemInstruction: systemPrompt,
        tools: [{ functionDeclarations: [supportEmailTool] }],
      }
    });

    const candidate = response.candidates?.[0];
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
