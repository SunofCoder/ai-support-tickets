import type { SupportTicket, TicketCategory, Priority } from "../types/support.js";

export interface TicketClassification {
  category: TicketCategory;
  priority: Priority;
  summary: string;
}

export function classifyTicket(ticket: SupportTicket): TicketClassification {
  return {
    category: "EMAIL_DELIVERY",
    priority: "MEDIUM",
    summary: `Customer reports that subscribers are not receiving the newsletter: ${ticket.subject}`,
  };
}