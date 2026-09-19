export type TicketCategory =
  | "EMAIL_DELIVERY"
  | "EMAIL_BOUNCE"
  | "SPAM"
  | "DOMAIN_AUTHENTICATION"
  | "SUBSCRIBER_MANAGEMENT"
  | "CAMPAIGN"
  | "ACCOUNT_ACCESS"
  | "BILLING"
  | "INTEGRATION"
  | "API"
  | "BUG"
  | "FEATURE_REQUEST"
  | "OTHER";

export type Priority = "LOW" | "MEDIUM" | "HIGH" | "URGENT";

export interface SupportTicket {
  subject: string;
  message: string;
  customer?: string;
}

export interface SupportAnalysis {
  category: TicketCategory;
  priority: Priority;
  summary: string;
  likelyCauses: string[];
  missingInformation: string[];
  troubleshootingSteps: string[];
  escalationRequired: boolean;
  escalationReason?: string;
  customerResponse: string;
}