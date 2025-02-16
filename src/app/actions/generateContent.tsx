"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || ''); // Ensure API key is available

export async function generateContent(prompt: string): Promise<string> {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(prompt);
        const response = await result.response.text(); 

        return response;
    } catch (error) {
        console.error("Error generating content:", error);
        return "Error generating content.";
    }
}
