import type { SupportTicket } from "../types/support.js";
import type { TicketClassification } from "../support/classify.js";

export function mockAnalyzeTicket(
  ticket: SupportTicket
): TicketClassification {
  return {
    category: "EMAIL_DELIVERY",
    priority: "MEDIUM",
    summary: `Customer reports that subscribers are not receiving the newsletter: ${ticket.subject}`,
  };
}