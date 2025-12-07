import OpenAI from "openai";

// Creates an OpenRouter client using the API key from the environment.
// Add your key as OPENROUTER_API_KEY in Vercel env or local .env.
export const getOpenRouterClient = () =>
  new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: "https://openrouter.ai/api/v1",
  });
