import { OpenAI } from 'ai/openai'

export const groq = new OpenAI({
  // baseUrl: 'https://api.staging.groqcloud.net/openai/v1',
  baseUrl: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY
})
