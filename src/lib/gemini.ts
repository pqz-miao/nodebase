import { createGoogleGenerativeAI } from "@ai-sdk/google";

export const google = createGoogleGenerativeAI({
    baseURL: process.env.GOOGLE_GENERATIVE_AI_BASE_URL,
    apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY
});
