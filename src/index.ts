import { readFile } from "node:fs/promises";
import type { SupportTicket } from "./types/support";

async function loadTicket(): Promise<SupportTicket> {
  const file = await readFile("examples/email-delivery.json", "utf-8");

  return JSON.parse(file) as SupportTicket;
}

async function main() {
  const ticket = await loadTicket();

  console.log("Customer:", ticket.customer);
  console.log("Subject:", ticket.subject);
  console.log("Message:", ticket.message);
}

main();