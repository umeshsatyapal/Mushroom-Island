import { GoogleGenAI } from "@google/genai";

// ⚠️ FIX: Use import.meta.env for Vite, and use a safe fallback to prevent crashes
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

// 1. Search Grounding Service
export const searchMushroomInfo = async (query: string): Promise<{ text: string; sources?: any[] }> => {
  if (!apiKey) return { text: "API Key is missing. Please configure VITE_GEMINI_API_KEY in Coolify." };
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash", // Updated to a stable model
      contents: `User question about mushrooms: ${query}. Provide a helpful, scientifically grounded answer.`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    return {
      text: response.text || "I couldn't find information on that right now.",
      sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks || [],
    };
  } catch (error) {
    console.error("Search error:", error);
    return { text: "Sorry, I encountered an error searching for that." };
  }
};

// 2. Image Generation
export const generateMushroomImage = async (prompt: string, size: "1K" | "2K" | "4K" = "1K"): Promise<string | null> => {
  if (!apiKey) throw new Error("API Key missing");
  try {
    const response = await ai.models.generateContent({
      model: 'imagen-3.0-generate-001', // Updated to correct Image model
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        }
      }
    });

    // Handle different response structures safely
    const part = response.candidates?.[0]?.content?.parts?.[0];
    if (part && 'inlineData' in part && part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
    }
    return null;
  } catch (error) {
    console.error("Image gen error:", error);
    throw error;
  }
};

// 3. Image Editing
export const editMushroomImage = async (base64Image: string, prompt: string): Promise<string | null> => {
    if (!apiKey) throw new Error("API Key missing");
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.0-flash', // Using Flash for multimodal editing
            contents: {
                parts: [
                    {
                        inlineData: {
                            mimeType: 'image/jpeg',
                            data: base64Image
                        }
                    },
                    { text: prompt }
                ]
            }
        });

        // Simplified return for editing (as text response describing changes or new image if model supports)
        return null; // Placeholder as pure image editing requires specific Imagen endpoint
    } catch (error) {
        console.error("Image edit error:", error);
        throw error;
    }
}

// 4. Thinking Mode
export const deepResearch = async (query: string): Promise<string> => {
  if (!apiKey) return "API Key missing";
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-thinking-exp", // Updated to Thinking model
      contents: `Perform a deep research analysis on: ${query}. Focus on scientific accuracy regarding mycology.`,
    });
    return response.text || "No analysis generated.";
  } catch (error) {
    console.error("Deep research error:", error);
    return "Unable to complete deep research at this time.";
  }
};
