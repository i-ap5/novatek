
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getProjectArchitectureBlueprint = async (userInput: string) => {
  if (!API_KEY) throw new Error("API Key is missing");

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `As an elite software architect for Novatek (a high-performance digital systems agency), analyze this project idea and provide a strategic architectural blueprint in JSON format: "${userInput}"`,
    config: {
      systemInstruction: "You are the Lead Systems Architect at Novatek. You provide high-fidelity, technical, and concise architectural advice. Respond strictly in JSON.",
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          phase: { type: Type.STRING, description: "The initial focus phase for the project." },
          recommendation: { type: Type.STRING, description: "A high-level technical recommendation for the infrastructure." },
          techStack: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Suggested technologies for this project."
          }
        },
        required: ["phase", "recommendation", "techStack"]
      }
    }
  });

  return JSON.parse(response.text);
};
