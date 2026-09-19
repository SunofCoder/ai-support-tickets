import type { SupportTicket } from "../types/support.js";

export interface TroubleshootingResult {
  likelyCauses: string[];
  missingInformation: string[];
  troubleshootingSteps: string[];
}

export function troubleshootTicket(
  ticket: SupportTicket
): TroubleshootingResult {
  return {
    likelyCauses: [
      "The campaign may still be processing.",
      "Some recipients may have received the email in their spam or promotions folder.",
      "The sending domain may have deliverability or authentication issues.",
    ],
    missingInformation: [
      "The approximate number of affected subscribers.",
      "Whether all subscribers or only some subscribers are affected.",
      "Whether the affected subscribers use the same email provider.",
    ],
    troubleshootingSteps: [
      "Check the campaign delivery status and recent delivery events.",
      "Verify whether the affected subscribers have valid email addresses.",
      "Check bounce and spam-related events for affected recipients.",
      "Review the sending domain authentication status.",
    ],
  };
}