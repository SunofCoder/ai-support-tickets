export const classificationPrompt = `
You are an AI customer support classifier.

Analyze the support ticket and determine:

- The ticket category
- The priority
- A short summary of the customer's problem

Use only the information provided in the ticket.

Return the result in a structured format.

Ticket subject:
{subject}

Ticket message:
{message}
`;