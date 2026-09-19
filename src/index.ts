
import { readFile } from "node:fs/promises";
import type { SupportTicket } from "./types/support";
import { classifyTicket } from "./support/classify";
import { troubleshootTicket } from "./support/troubleshoot";
import { evaluateEscalation } from "./support/escalate";
import { generateCustomerResponse } from "./support/response";



async function loadTicket(): Promise<SupportTicket> {
  const file = await readFile("examples/email-delivery.json", "utf-8");

  return JSON.parse(file) as SupportTicket;
}

async function main() {
  const ticket = await loadTicket();

  console.log("\n=== SUPPORT TICKET ===");
  console.log("Customer:", ticket.customer);
  console.log("Subject:", ticket.subject);
  console.log("Message:", ticket.message);

 

  console.log("\n=== TICKET CLASSIFICATION ===");

  const classification = classifyTicket(ticket);

  console.log("Category:", classification.category);
  console.log("Priority:", classification.priority);
  console.log("Summary:", classification.summary);

  console.log("\n=== TROUBLESHOOTING SUGGESTIONS ===");

  const troubleshooting = troubleshootTicket(ticket);

  console.log("Likely Causes:", troubleshooting.likelyCauses.join("; "));
  console.log(
    "Missing Information:",
    troubleshooting.missingInformation.join("; ")
  );
  console.log(
    "Troubleshooting Steps:",
    troubleshooting.troubleshootingSteps.join("; ")
  );

  console.log("\n=== ESCALATION EVALUATION ===");

  const escalation = evaluateEscalation(ticket, classification);

  console.log("Escalation Required:", escalation.required);
  if (escalation.reason) {
    console.log("Reason:", escalation.reason);
    } 

  console.log("\n=== CUSTOMER RESPONSE ===");

  const response = generateCustomerResponse(
    ticket,
    classification,
    troubleshooting,
    escalation
  );

  console.log("Response:", response);
}

main().catch((error) => {
  console.error("Application error:", error);
  process.exit(1);
});