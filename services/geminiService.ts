
import { GoogleGenAI, GenerateContentResponse, Type, FunctionDeclaration } from "@google/genai";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// 1. Search Grounding Service
export const searchMushroomInfo = async (query: string): Promise<{ text: string; sources?: any[] }> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
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

// 2. Image Generation (Nano Banana Pro)
export const generateMushroomImage = async (prompt: string, size: "1K" | "2K" | "4K" = "1K"): Promise<string | null> => {
  try {
    // Using gemini-3-pro-image-preview for high quality
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [
          { text: prompt }
        ]
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
          imageSize: size
        }
      }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image gen error:", error);
    throw error;
  }
};

// 3. Image Editing (Nano Banana)
export const editMushroomImage = async (base64Image: string, prompt: string): Promise<string | null> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
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

        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
                return `data:image/png;base64,${part.inlineData.data}`;
            }
        }
        return null;
    } catch (error) {
        console.error("Image edit error:", error);
        throw error;
    }
}

// 4. Thinking Mode for Complex Queries
export const deepResearch = async (query: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `Perform a deep research analysis on: ${query}. Focus on scientific accuracy regarding mycology and health benefits.`,
      config: {
        thinkingConfig: { thinkingBudget: 32768 },
      }
    });
    return response.text || "No analysis generated.";
  } catch (error) {
    console.error("Deep research error:", error);
    return "Unable to complete deep research at this time.";
  }
};
