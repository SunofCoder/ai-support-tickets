import { openai } from "./clients";
import type { SupportTicket } from "../types/support";

export async function analyzeTicket(ticket: SupportTicket) {
  const prompt = `
You are a customer support assistant.

Analyze the following support ticket and provide:

1. The likely problem
2. Possible causes
3. Recommended troubleshooting steps
4. Whether the issue may require escalation
5. A draft customer response

Subject:
${ticket.subject}

Message:
${ticket.message}
`;

  const response = await openai.responses.create({
    model: "gpt-5-mini",
    input: prompt,
  });

  return response.output_text;
}