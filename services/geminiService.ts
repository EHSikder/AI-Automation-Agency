import { GoogleGenAI } from "@google/genai";
import { CONTENT } from '../constants';

const API_KEY = process.env.API_KEY || ''; // In production, this would be handled securely
const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateResponse = async (userMessage: string, lang: 'en' | 'ar'): Promise<string> => {
  if (!API_KEY) {
    return lang === 'en' 
      ? "Demo Mode: API Key missing. I would normally answer: " + userMessage 
      : "وضع تجريبي: مفتاح API مفقود. كنت سأجيب: " + userMessage;
  }

  try {
    const context = lang === 'en' ? JSON.stringify(CONTENT.en) : JSON.stringify(CONTENT.ar);
    const systemPrompt = `You are a helpful sales assistant for GulfAutomate AI. 
    Use the following website content context to answer questions: ${context}.
    Keep answers short (under 50 words), professional, and encouraging.
    If the user speaks Arabic, reply in Arabic. If English, reply in English.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: systemPrompt,
      }
    });

    return response.text || (lang === 'en' ? "I couldn't generate a response." : "لم أتمكن من إنشاء استجابة.");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return lang === 'en' ? "Sorry, I'm having trouble connecting right now." : "عذراً، أواجه مشكلة في الاتصال حالياً.";
  }
};