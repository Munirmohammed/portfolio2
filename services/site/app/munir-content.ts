export const site = {
	name: 'Munir Mohammed',
	role: 'Senior Frontend Developer',
	location: 'Addis Ababa, Ethiopia',
	email: 'munirmohammed038@gmail.com',
	phone: '+251 977 465 797',
	github: 'https://github.com/Munirmohammed',
	linkedin: 'https://www.linkedin.com/in/munir-mohammed-26015220b',
	blurb:
		'I build fast, accessible product interfaces in React, Next.js and TypeScript — dashboards, fintech flows, and the API layers underneath them.',
}

export type ProjectLink = { label: string; href: string }

export type Project = {
	title: string
	year: string
	summary: string
	highlights: Array<string>
	stack: Array<string>
	links: Array<ProjectLink>
}

export const projects: Array<Project> = [
	{
		title: 'Marketing Dashboard',
		year: '2026',
		summary:
			'High-performance marketing operations control center — campaign orchestration, live telemetry feeds, CRM kanban, and AI agent coordination.',
		highlights: [
			'Full-stack Next.js 16 control center with fast SQLite WAL-mode state sync engine.',
			'Interactive CRM pipeline with drag-and-drop kanban board, sequence analytics, and human-in-the-loop approvals.',
			'Modernized glassmorphic UI with custom design tokens, dark/light theme, and live telemetry widgets.',
		],
		stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'SQLite', 'Zustand', 'Recharts'],
		links: [
			{
				label: 'Source',
				href: 'https://github.com/Munirmohammed/marketing-dashboard',
			},
		],
	},
	{
		title: 'HitKeep',
		year: '2026',
		summary:
			'Self-hostable, privacy-friendly web analytics platform — cookieless tracking, real-time visitor telemetry, and modern KPI dashboard.',
		highlights: [
			'Built with Angular standalone components and reactive architecture for real-time web telemetry.',
			'Sub-millisecond tracking SDK, automated spam filtering, and custom KPI performance cards.',
			'Decluttered layout with modern elevated design tokens, dark/light theme, and accessible data tables.',
		],
		stack: ['Angular', 'TypeScript', 'SCSS', 'Go', 'Web Analytics', 'Docker'],
		links: [
			{
				label: 'Source',
				href: 'https://github.com/Munirmohammed/hitkeep',
			},
		],
	},
	{
		title: 'Hamer Admin',
		year: '2026',
		summary:
			'Operations dashboard for a fitness platform — programs, exercises, trainers, users and marketing.',
		highlights: [
			'Treats the app as 20 routes of React Server Components, grouped into auth and dashboard shells.',
			'Keeps every endpoint in one typed map, so a path change propagates instead of drifting per screen.',
			'JWT sign-in with silent refresh, role-guarded route groups and loading/empty states on every async surface.',
		],
		stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind'],
		links: [
			{ label: 'Live demo', href: 'https://hamer-frontend.vercel.app' },
			{
				label: 'Source',
				href: 'https://github.com/Munirmohammed/Hamer-Frontend',
			},
		],
	},
	{
		title: 'IslamQA',
		year: '2025 – 2026',
		summary:
			'Islamic knowledge platform: a 14-module FastAPI backend with ML answer matching, plus a React Native client.',
		highlights: [
			'Quran, tafsir, tajweed, recitation, memorization, halaqa, gamification, analytics and admin APIs behind a versioned /api/v1 surface.',
			'Retrieval evaluation harness with gold queries and fixture corpora, wired into CI so ranking regressions fail the build.',
			'Expo client and pytest coverage across auth, search and content.',
		],
		stack: ['Python', 'FastAPI', 'ML retrieval', 'Expo', 'pytest'],
		links: [
			{ label: 'Backend', href: 'https://github.com/Munirmohammed/IslamQA' },
			{ label: 'App', href: 'https://github.com/Munirmohammed/IslamQA-app' },
		],
	},
	{
		title: 'Igor',
		year: '2026',
		summary:
			'Operator console for AI voice agents — call orchestration, live telemetry and dossiers.',
		highlights: [
			'Inbound and outbound call flows with recording-status webhooks and an intelligence-inject endpoint.',
			'Twilio Voice SDK and SIP.js behind a token endpoint, with Socket.IO carrying call-state updates into the UI.',
			'Agents, sessions and dossiers modelled in Prisma; server-rendered dashboards over the same models.',
		],
		stack: ['Next.js 16', 'Prisma', 'Twilio Voice', 'SIP.js', 'Socket.IO'],
		links: [{ label: 'Source', href: 'https://github.com/Munirmohammed/igor' }],
	},
	{
		title: 'Mela',
		year: '2026',
		summary:
			'B2B marketplace connecting small retailers to wholesale markets — catalog, cart, orders and credit.',
		highlights: [
			'React 18 front end with TanStack Query for cache and refetch, Zustand for cart and auth state, Radix for accessible primitives.',
			'Express/TypeScript API on Prisma with Redis-backed BullMQ workers for demand aggregation and notifications.',
			'Both services containerised with Docker and nginx; Zod validation, JWT auth and rate limiting on the API.',
		],
		stack: [
			'React',
			'TanStack Query',
			'Zustand',
			'Express',
			'Prisma',
			'Redis',
			'Docker',
		],
		links: [{ label: 'Source', href: 'https://github.com/Munirmohammed/mela' }],
	},
	{
		title: 'MasjidConnect Ethiopia',
		year: '2026',
		summary:
			'React Native app for Ethiopian mosque communities: prayer times, maps, khutbah audio and donations.',
		highlights: [
			'Prayer times computed on-device with Adhan.js from the user’s coordinates, with notification scheduling.',
			'~50 mosques on an interactive map, imam directory, events and a community noticeboard.',
			'Expo Router with Zustand state and a custom emerald/gold theme across light and dark modes.',
		],
		stack: [
			'Expo',
			'React Native',
			'Expo Router',
			'Zustand',
			'react-native-maps',
		],
		links: [
			{
				label: 'Source',
				href: 'https://github.com/Munirmohammed/MasjidConnectEthiopia',
			},
		],
	},
	{
		title: 'TradeSync Enterprise',
		year: '2024',
		summary:
			'Financial trading engine UI for institutional clients — order books, portfolios and execution.',
		highlights: [
			'Real-time order book, portfolio state and execution confirmations over WebSockets and Redis Pub/Sub.',
			'Live margin alerts and instant trade confirmations that stay readable during volatile market conditions.',
		],
		stack: ['React', 'WebSockets', 'Redis Pub/Sub', 'Spring Boot'],
		links: [],
	},
]

export type Role = {
	title: string
	company: string
	period: string
	location: string
	summary?: string
	highlights: Array<string>
	stack: Array<string>
}

export const experience: Array<Role> = [
	{
		title: 'Senior Frontend Engineer',
		company: 'Turing',
		period: 'Sep 2025 – Present',
		location: 'Remote',
		summary:
			'Amazon Agentic — an AWS-owned AI initiative spanning Kiro, Amazon Q and AWS Transform.',
		highlights: [
			'Build and maintain the frontend tooling and evaluation interfaces used to grade AI agents.',
			'Author task specifications, golden solutions and validation criteria used to benchmark agent performance across finance, healthcare and enterprise domains.',
			'Design multi-step evaluation workflows with API integrations, turning technical requirements into testable UI-driven flows.',
		],
		stack: ['React', 'TypeScript', 'API design', 'JSON Schema'],
	},
	{
		title: 'Frontend Engineer',
		company: 'PlayStream Interactive (Remytel)',
		period: 'May 2024 – Present',
		location: 'Remote',
		summary: 'Cross-border payments platform serving international customers.',
		highlights: [
			'Built the React Native app and React web interfaces for the platform.',
			'Integrated Redux-managed state across multi-currency transaction flows, real-time order status and user sessions.',
			'Connected the frontend to Stripe, Twilio and DtOne for payments, OTP verification and notifications.',
			'Built a real-time notification system (push, SMS, email) plus MFA, OTP and session-management flows.',
		],
		stack: [
			'React',
			'React Native',
			'Redux',
			'TypeScript',
			'Express',
			'PostgreSQL',
		],
	},
	{
		title: 'Frontend / Full-Stack Engineer',
		company: 'Stone Age Technologies',
		period: 'Nov 2023 – Oct 2025',
		location: 'Remote',
		summary:
			'J-Search, NoStock, LogiFlow AI and Ethio-Education — e-commerce, ERP, logistics and learning products.',
		highlights: [
			'Built e-commerce/ERP frontends covering inventory, order fulfilment, supplier workflows and location-based inventory ranking across Scandinavian and European channels.',
			'Shipped real-time React + Chart.js dashboards for financial KPIs, shipment status and warehouse stock.',
			'Integrated TensorFlow.js in the browser to surface demand forecasts and stock optimisation directly in the NoStock UI.',
			'Delivered supplier, customer, delivery, finance and stock-control modules on Node.js with React frontends.',
		],
		stack: ['React', 'Chart.js', 'TensorFlow.js', 'Node.js', 'Express'],
	},
	{
		title: 'Software Developer',
		company: 'Omic',
		period: 'Jun 2022 – Jan 2024',
		location: 'Remote',
		summary: 'Biomedical AI platform reverse-engineering complex diseases.',
		highlights: [
			'Built frontend interfaces consuming FastAPI REST endpoints for a biomedical AI platform.',
			'Surfaced ML-driven insights from TensorFlow and PyTorch models through data-rich UI components for researchers.',
		],
		stack: ['React', 'Python', 'FastAPI', 'TensorFlow', 'PyTorch'],
	},
	{
		title: 'Data Structures & Algorithms Mentor',
		company: 'A2SV — Africa to Silicon Valley',
		period: 'Feb 2023 – Sep 2024',
		location: 'Remote',
		summary:
			'Google-backed program preparing engineers for top-tier technical interviews.',
		highlights: [
			'Mentored competitive programmers in data structures, algorithms and interview readiness.',
			'550+ problems solved across LeetCode, Codeforces and HackerRank.',
		],
		stack: ['Algorithms', 'Data structures', 'Python'],
	},
]

export const skills: Array<{ label: string; items: Array<string> }> = [
	{
		label: 'Frontend',
		items: [
			'React',
			'Next.js',
			'TypeScript',
			'JavaScript',
			'Redux',
			'React Native',
			'Material UI',
			'Chart.js',
			'Tailwind',
			'HTML/CSS',
		],
	},
	{
		label: 'State & data',
		items: ['Redux', 'TanStack Query', 'Zustand', 'REST APIs', 'WebSockets'],
	},
	{
		label: 'Backend & integration',
		items: ['Node.js', 'Express', 'Python', 'FastAPI', 'Prisma', 'Spring Boot'],
	},
	{
		label: 'Tools & DevOps',
		items: ['Docker', 'Git', 'Sentry', 'Redis', 'Vitest', 'Playwright', 'CI'],
	},
	{
		label: 'Domain',
		items: [
			'Fintech',
			'E-commerce',
			'ERP',
			'AI integration',
			'Real-time dashboards',
		],
	},
]
