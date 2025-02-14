'use server';

import { OpenAI } from "openai";
import { getRandomBackupQuote } from './quotes';

const apiKey = process.env.NEXT_PUBLIC_AIML_KEY!;
const baseURL = "https://api.aimlapi.com/v1";

const api = new OpenAI({
    apiKey,
    baseURL,
});

export async function generateValentineQuote(name: string) {
    try {
        const response = await api.chat.completions.create({
            model: 'gpt-4',
            messages: [
                {
                    role: "system",
                    content: "You are a romantic poet specialized in creating sweet and heartfelt Valentine's Day messages. Keep responses concise and personal.",
                },
                {
                    role: "user",
                    content: `Generate a romantic Valentine's Day quote for someone named ${name}. Make it sweet, personal, and no longer than 2-3 sentences.`,
                },
            ],
        });

        return response.choices[0].message.content || getRandomBackupQuote(name);
    } catch (error) {
        console.error('Error generating quote:', error);
        return getRandomBackupQuote(name);
    }
}