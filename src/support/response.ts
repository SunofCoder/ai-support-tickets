import type { SupportTicket } from "../types/support";
import type { TicketClassification } from "./classify";
import type { TroubleshootingResult } from "./troubleshoot";
import type { EscalationResult } from "./escalate";

export function generateCustomerResponse(
  ticket: SupportTicket,
  classification: TicketClassification,
  troubleshooting: TroubleshootingResult,
  escalation: EscalationResult
): string {
  if (escalation.required) {
    return `Hi ${ticket.customer ?? "there"},

Thanks for reaching out. We've reviewed your issue and it requires further technical investigation.

We've escalated the issue to our technical team and will follow up with you once we have more information.

Best,
Support Team`;
  }

  return `Hi ${ticket.customer ?? "there"},

Thanks for reaching out. It looks like your newsletter was sent successfully, but some subscribers may still be waiting for delivery.

Please check the campaign delivery events and confirm whether the issue affects all subscribers or only specific recipients. It would also be helpful to know whether the affected subscribers use the same email provider.

You can also check the affected recipients' spam or promotions folders and review your sending domain authentication status.

Once we have that information, we can investigate further.

Best,
Support Team`;
}