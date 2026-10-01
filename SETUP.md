# Setup guide

1. In n8n: **Workflows -> Import from File** and pick a `.json` from `workflows/`.
2. Open each node marked with a credential and select your own: SMTP (email), Google Sheets OAuth2.
3. Set environment variables on your n8n instance (or replace the `$env.X` expressions with literal values): `OWNER_EMAIL`, `FROM_EMAIL`, `CHAT_WEBHOOK_URL`.
4. Replace `REPLACE_WITH_SHEET_ID` with your Google Sheet ID (tab named `Leads`; header row: `name, phone, email, message, received_at, contacted`).
5. For webhook workflows, open the Webhook node, copy the **Production URL**, and POST your form to it (JSON body: `name, phone, email, message`). Activate the workflow.
6. Test: `curl -X POST <your-webhook-url> -H 'Content-Type: application/json' -d '{"name":"Test","phone":"555-555-0100","email":"t@example.com","message":"hello"}'`

Notes
- Workflows import **inactive**; activate after testing.
- If a node shows a warning, re-select its operation (node versions change between n8n releases).
- Only message people who consented, and follow your local laws (CAN-SPAM, TCPA); this is not legal advice.
