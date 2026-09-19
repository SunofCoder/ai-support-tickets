import type { SupportTicket } from "../types/support.js";
import type { TicketClassification } from "./classify.js";

export interface EscalationResult {
  required: boolean;
  reason?: string;
}

export function evaluateEscalation(
  ticket: SupportTicket,
  classification: TicketClassification
): EscalationResult {
  if (classification.priority === "URGENT") {
    return {
      required: true,
      reason: "Urgent tickets require immediate human review.",
    };
  }

  if (classification.category === "BUG") {
    return {
      required: true,
      reason: "Bug reports may require engineering investigation.",
    };
  }

  if (classification.category === "API") {
    return {
      required: true,
      reason: "API issues may require technical investigation.",
    };
  }

  return {
    required: false,
  };
}