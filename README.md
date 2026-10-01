# n8n Lead Workflow Templates

Import-ready n8n workflow JSON for small local businesses (self-hosted n8n is free).

**Free (MIT) in this repo**, in `workflows/`:
- `01-lead-form-to-sheet-and-owner-alert.json`: form webhook -> clean fields -> Google Sheet row -> email to owner
- `05-new-lead-to-chat-webhook.json`: form webhook -> Slack/Discord/Teams incoming webhook

**Paid pack ($29)** adds three more plus a setup guide: consent-first review request, daily site + tap-to-call link check, weekday stale-lead digest. Order by email: [WANT N8N PACK](mailto:tommytbomar@gmail.com?subject=WANT%20N8N%20PACK). Sales page: https://tommytbomar-dot.github.io/tools/n8n-templates/

Validate structure locally: `node --test test` (checks JSON, unique node names, connections, reachability, no secrets).
Setup: [SETUP.md](SETUP.md). Paid help: [SUPPORT.md](SUPPORT.md). FAQ: [DISCUSSIONS.md](DISCUSSIONS.md). License: MIT.

Honest note: these were structurally validated and written against n8n 1.x node schemas, but not run inside a live n8n instance by the author; you may need to re-select an operation or credential after import.
