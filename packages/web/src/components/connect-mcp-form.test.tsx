import {afterEach, describe, expect, mock, test} from 'bun:test';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import {createMemoryRouter, RouterProvider} from 'react-router';
import {ConnectMcpForm} from './connect-mcp-form';

afterEach(cleanup);

function renderForm(shared = false, returnTo?: 'welcome') {
	const router = createMemoryRouter(
		[
			{
				path: '/:org/connections/new/mcp',
				element: <ConnectMcpForm shared={shared} returnTo={returnTo} onConnected={mock()} />,
			},
		],
		{initialEntries: ['/team/connections/new/mcp']},
	);
	render(<RouterProvider router={router} />);
}

function choose(name: string) {
	fireEvent.change(screen.getByLabelText('Service'), {target: {value: name}});
}

describe('MCP service connections', () => {
	test('prefills hosted services and clears the previous service token', () => {
		renderForm();
		choose('Vercel');
		expect((screen.getByLabelText('Server address') as HTMLInputElement).value).toBe(
			'https://mcp.vercel.com',
		);
		fireEvent.change(screen.getByLabelText('Access token (optional)'), {
			target: {value: 'invented-token'},
		});
		choose('Rainbrand');
		expect((screen.getByLabelText('Name') as HTMLInputElement).value).toBe('Rainbrand');
		expect((screen.getByLabelText('Server address') as HTMLInputElement).value).toBe(
			'https://mcp.rainbrand.com/mcp',
		);
		expect((screen.getByLabelText('Access token (optional)') as HTMLInputElement).value).toBe('');
	});
	test('routes Google services through the existing personal sign-in', () => {
		renderForm();
		choose('Google Contacts');
		expect(screen.getByRole('link', {name: 'Connect Google Contacts'}).getAttribute('href')).toBe(
			'/api/orgs/team/connections/google/start',
		);
		expect(screen.queryByLabelText('Access token (optional)')).toBeNull();
	});
	test('preserves shared onboarding sign-in', () => {
		renderForm(true, 'welcome');
		choose('Notion');
		expect(screen.getByRole('link', {name: 'Connect Notion'}).getAttribute('href')).toBe(
			'/api/orgs/team/connections/notion/start?returnTo=welcome&share=everyone',
		);
	});
	test('requires a server address for private services instead of inventing one', () => {
		renderForm();
		choose('Ontora');
		expect((screen.getByLabelText('Server address') as HTMLInputElement).value).toBe('');
		expect((screen.getByRole('button', {name: 'Connect'}) as HTMLButtonElement).disabled).toBe(
			true,
		);
	});
	test('routes iCloud Mail to its shared mailbox form during onboarding', () => {
		renderForm(true, 'welcome');
		choose('iCloud Mail');
		expect(screen.getByRole('link', {name: 'Connect iCloud Mail'}).getAttribute('href')).toBe(
			'/team/welcome/connections/email?for=everyone',
		);
	});
});
