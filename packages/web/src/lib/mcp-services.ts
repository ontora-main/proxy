import type {IntegrationId} from '@proxy/integrations';

export type McpService = {
	name: string;
	integrationId?: IntegrationId;
	url?: string;
	note: string;
};

// Remote addresses supplied by the user, installed plugin manifests, or provider documentation.
// App-backed ChatGPT connectors do not expose a portable MCP address in their manifests.
export const MCP_SERVICES: McpService[] = [
	{
		name: 'Gmail',
		integrationId: 'google',
		note: 'Use the built-in connection to sign in with your own account.',
	},
	{
		name: 'Vercel',
		url: 'https://mcp.vercel.com',
		note: 'Connect to the hosted MCP server. Sign in when prompted, or supply a token if required.',
	},
	{
		name: 'Notion',
		integrationId: 'notion',
		note: 'Use the built-in connection to sign in with your own account.',
	},
	{
		name: 'Slack',
		url: 'https://mcp.slack.com/mcp',
		note: 'Use a user token issued for a Slack app with MCP enabled. Browser sign-in requires a registered Slack client, which is not supported here yet.',
	},
	{
		name: 'Google Drive',
		integrationId: 'google',
		note: 'Use the built-in connection to sign in with your own account.',
	},
	{
		name: 'Google Contacts',
		integrationId: 'google',
		note: 'Use the built-in connection to sign in with your own account.',
	},
	{
		name: 'Rho MCP',
		url: 'https://rhoapi.rho.co/mcp/v1',
		note: 'Connect to the hosted MCP server. Sign in when prompted, or supply a token if required.',
	},
	{
		name: 'WhatsApp',
		note: 'Ask your team administrator for the hosted MCP server address and its authentication requirements.',
	},
	{
		name: 'WhatsApp MCP',
		url: 'https://whatsapp.ontora.com/mcp',
		note: 'Connect to the hosted MCP server. Sign in when prompted, or supply a token if required.',
	},
	{
		name: 'iCloud Calendar',
		note: 'Ask your team administrator for the hosted MCP server address and its authentication requirements.',
	},
	{name: 'iCloud Mail', integrationId: 'email', note: 'Connect with an app password.'},
	{
		name: 'Rainbrand',
		url: 'https://mcp.rainbrand.com/mcp',
		note: 'Connect to the hosted MCP server. Sign in when prompted, or supply a token if required.',
	},
	{
		name: 'Sazabi',
		url: 'https://mcp.sazabi.com/mcp',
		note: 'Leave the token empty to sign in. Sazabi secret keys require a custom header and cannot be entered as bearer tokens here.',
	},
	{
		name: 'LinkedIn',
		note: 'Ask your team administrator for the hosted MCP server address and its authentication requirements.',
	},
	{
		name: 'Ontora',
		note: 'Ask your team administrator for the hosted MCP server address and its authentication requirements.',
	},
	{
		name: 'Resend MCP',
		url: 'https://mcp.resend.com/mcp',
		note: 'Connect to the hosted MCP server. Sign in when prompted, or supply a token if required.',
	},
	{
		name: 'Twilio Developer Kit',
		note: 'This plugin includes skills. To connect tools here, supply a separately hosted MCP server address.',
	},
	{
		name: 'Porter',
		url: 'https://mcp.porter.run',
		note: 'Connect to the hosted MCP server. Sign in when prompted, or supply a token if required.',
	},
	{
		name: 'Clerk',
		url: 'https://mcp.clerk.com/mcp',
		note: 'Connect to the hosted MCP server. Sign in when prompted, or supply a token if required.',
	},
	{
		name: 'Needle MCP',
		url: 'https://needle.app/mcp/v1',
		note: 'Connect to the hosted MCP server. Sign in when prompted, or supply a token if required.',
	},
	{
		name: 'YC Bookface',
		url: 'https://api.ycombinator.com/v1/mcp',
		note: 'Connect to the hosted MCP server. Sign in when prompted, or supply a token if required.',
	},
	{
		name: 'Ontora Company Brain',
		url: 'https://brain.ontora.com/mcp',
		note: 'Connect to the hosted MCP server. Sign in when prompted, or supply a token if required.',
	},
	{
		name: 'Plugin Creator',
		note: 'Ask your team administrator for the hosted MCP server address and its authentication requirements.',
	},
	{
		name: 'Linear',
		integrationId: 'linear',
		note: 'Use the built-in connection to sign in with your own account.',
	},
	{
		name: 'ElevenLabs',
		note: 'Ask your team administrator for the hosted MCP server address and its authentication requirements.',
	},
	{
		name: 'Cal.com',
		note: 'Ask your team administrator for the hosted MCP server address and its authentication requirements.',
	},
	{
		name: 'Clay',
		url: 'https://api.clay.com/v3/mcp',
		note: 'Connect to the hosted MCP server. Sign in when prompted, or supply a token if required.',
	},
	{
		name: 'Vanta',
		url: 'https://mcp.vanta.com/mcp',
		note: 'Use the server for your account region: mcp.vanta.com (US), mcp.eu.vanta.com (EU), or mcp.aus.vanta.com (Australia), with /mcp after the host.',
	},
	{
		name: 'Render',
		url: 'https://mcp.render.com/mcp',
		note: 'Connect to the hosted MCP server. Sign in when prompted, or supply a token if required.',
	},
	{
		name: 'PostHog',
		url: 'https://mcp.posthog.com/mcp',
		note: 'Connect to the hosted MCP server. Sign in when prompted, or supply a token if required.',
	},
	{
		name: 'Cloudflare',
		integrationId: 'cloudflare',
		note: 'Use the built-in connection to sign in with your own account.',
	},
	{
		name: 'Dropbox',
		url: 'https://mcp.dropbox.com/chatgpt_app_mcp',
		note: 'Connect to the hosted MCP server. Sign in when prompted, or supply a token if required.',
	},
	{
		name: 'Superhuman Mail',
		url: 'https://mcp.mail.superhuman.com/mcp',
		note: 'Connect to the hosted MCP server. Sign in when prompted, or supply a token if required.',
	},
	{
		name: 'Stripe',
		url: 'https://mcp.stripe.com',
		note: 'Connect to the hosted MCP server. Sign in when prompted, or supply a token if required.',
	},
	{
		name: 'Writing Style',
		note: 'This plugin includes skills. To connect tools here, supply a separately hosted MCP server address.',
	},
	{
		name: 'Attio',
		url: 'https://mcp.attio.com/mcp',
		note: 'Connect to the hosted MCP server. Sign in when prompted, or supply a token if required.',
	},
	{
		name: 'Mercury',
		url: 'https://mcp.mercury.com/mcp',
		note: 'Connect to the hosted MCP server. Sign in when prompted, or supply a token if required.',
	},
	{
		name: 'Figma',
		url: 'https://mcp.figma.com/mcp',
		note: 'Connect to the hosted MCP server. Sign in when prompted, or supply a token if required.',
	},
	{
		name: 'Google Calendar',
		integrationId: 'google',
		note: 'Use the built-in connection to sign in with your own account.',
	},
	{
		name: 'Supabase',
		url: 'https://mcp.supabase.com/mcp',
		note: 'Connect to the hosted MCP server. Sign in when prompted, or supply a token if required.',
	},
	{
		name: 'GitHub',
		url: 'https://api.githubcopilot.com/mcp/',
		note: 'Use a GitHub personal access token with the permissions you need. Browser sign-in requires a registered GitHub client, which is not supported here yet.',
	},
	{
		name: 'Granola',
		integrationId: 'granola',
		note: 'Use the built-in connection to sign in with your own account.',
	},
	{
		name: 'Happenstance',
		url: 'https://happenstance.ai/mcp',
		note: 'Connect to the hosted MCP server. Sign in when prompted, or supply a token if required.',
	},
];
