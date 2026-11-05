# MCP service picker

The custom MCP connection form offers 43 service names. Nine use existing built-in connection flows, 25 prefill a hosted server address, and nine require additional setup. This directory reuses the existing MCP transport, credential storage, organization sharing, and tool permissions. Listing a service does not verify that its authentication flow works.

## Connection routes

| Service              | Connection                                             |
| -------------------- | ------------------------------------------------------ |
| Gmail                | Built-in `google` connection                           |
| Vercel               | https://mcp.vercel.com                                 |
| Notion               | Built-in `notion` connection                           |
| Slack                | https://mcp.slack.com/mcp                              |
| Google Drive         | Built-in `google` connection                           |
| Google Contacts      | Built-in `google` connection                           |
| Rho MCP              | https://rhoapi.rho.co/mcp/v1                           |
| WhatsApp             | Server address or separate MCP implementation required |
| WhatsApp MCP         | https://whatsapp.ontora.com/mcp                        |
| iCloud Calendar      | Server address or separate MCP implementation required |
| iCloud Mail          | Built-in `email` connection                            |
| Rainbrand            | https://mcp.rainbrand.com/mcp                          |
| Sazabi               | https://mcp.sazabi.com/mcp                             |
| LinkedIn             | Server address or separate MCP implementation required |
| Ontora               | Server address or separate MCP implementation required |
| Resend MCP           | https://mcp.resend.com/mcp                             |
| Twilio Developer Kit | Server address or separate MCP implementation required |
| Porter               | https://mcp.porter.run                                 |
| Clerk                | https://mcp.clerk.com/mcp                              |
| Needle MCP           | https://needle.app/mcp/v1                              |
| YC Bookface          | https://api.ycombinator.com/v1/mcp                     |
| Ontora Company Brain | https://brain.ontora.com/mcp                           |
| Plugin Creator       | Server address or separate MCP implementation required |
| Linear               | Built-in `linear` connection                           |
| ElevenLabs           | Server address or separate MCP implementation required |
| Cal.com              | Server address or separate MCP implementation required |
| Clay                 | https://api.clay.com/v3/mcp                            |
| Vanta                | https://mcp.vanta.com/mcp                              |
| Render               | https://mcp.render.com/mcp                             |
| PostHog              | https://mcp.posthog.com/mcp                            |
| Cloudflare           | Built-in `cloudflare` connection                       |
| Dropbox              | https://mcp.dropbox.com/chatgpt_app_mcp                |
| Superhuman Mail      | https://mcp.mail.superhuman.com/mcp                    |
| Stripe               | https://mcp.stripe.com                                 |
| Writing Style        | Server address or separate MCP implementation required |
| Attio                | https://mcp.attio.com/mcp                              |
| Mercury              | https://mcp.mercury.com/mcp                            |
| Figma                | https://mcp.figma.com/mcp                              |
| Google Calendar      | Built-in `google` connection                           |
| Supabase             | https://mcp.supabase.com/mcp                           |
| GitHub               | https://api.githubcopilot.com/mcp/                     |
| Granola              | Built-in `granola` connection                          |
| Happenstance         | https://happenstance.ai/mcp                            |

## Authentication requirements

- Google requires a configured Google OAuth client. iCloud Mail uses the existing mailbox form with an app password.
- Custom MCP browser sign-in requires dynamic client registration. Slack and GitHub require separately registered OAuth clients, so use an appropriate user token or personal access token with this form. This change does not add their registered-client OAuth flows.
- Sazabi secret keys require a custom header. This form supports bearer tokens, so use Sazabi OAuth instead.
- Vanta accounts must use the server for their region: `mcp.vanta.com`, `mcp.eu.vanta.com`, or `mcp.aus.vanta.com`, with `/mcp` after the host.
- Writing Style and Twilio Developer Kit include skills. Skill content is not itself an MCP authentication endpoint.
- WhatsApp and WhatsApp MCP remain separate entries; only WhatsApp MCP has a configured address.
- Personal connections stay personal by default. Organization sharing uses the existing explicit sharing choice. Switching services clears the previous service's token.

## Endpoint sources and validation boundary

Server presets come from provider documentation, installed MCP manifests, and explicitly supplied deployment addresses. No ChatGPT credentials are copied. Endpoint probes are unauthenticated and do not establish completed sign-in, token refresh, or tool access. Several endpoints reject unauthenticated probes with 403; authentication remains unverified.

Provider references: [Slack](https://docs.slack.dev/ai/slack-mcp-server/), [Sazabi](https://docs.sazabi.com/reference/mcp-server), [Clerk](https://clerk.com/docs/guides/ai/mcp/clerk-mcp-server), [Needle](https://needle.app/docs/mcp/introduction), [Clay](https://university.clay.com/docs/connect-to-clay-mcp), [Vanta](https://help.vanta.com/en/articles/14094979-connecting-to-vanta-mcp), [Superhuman Mail](https://help.superhuman.com/hc/en-us/articles/46005696690317-Superhuman-Mail-MCP-Server), [Attio](https://mcp.attio.com/), [Supabase](https://supabase.com/docs/guides/ai-tools/mcp), [Happenstance](https://happenstance.ai/integrations/claude-code).
