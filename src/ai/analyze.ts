import { openai } from "./client.js";
import type { SupportTicket } from "../types/support.js";
import { classificationPrompt } from "./prompts.js";

export async function analyzeTicket(ticket: SupportTicket) {
  const prompt = classificationPrompt
    .replace("{subject}", ticket.subject)
    .replace("{message}", ticket.message);

  const response = await openai.responses.create({
    model: "gpt-5-mini",
    input: prompt,
  });

  return response.output_text;
}