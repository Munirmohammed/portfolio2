import { type MetaFunction } from 'react-router'
import { Grid } from '#app/components/grid.tsx'
import { Spacer } from '#app/components/spacer.tsx'
import { H1, H2, H3, Paragraph } from '#app/components/typography.tsx'
import { site, skills } from '#app/munir-content.ts'

export const meta: MetaFunction = () => [
	{ title: `About — ${site.name}` },
	{
		name: 'description',
		content: `About ${site.name}, a ${site.role.toLowerCase()} in ${site.location} working in React, Next.js, TypeScript and Node.js.`,
	},
]

export default function AboutRoute() {
	return (
		<main className="pb-24">
			<Grid>
				<div className="col-span-full lg:col-span-8">
					<H1>About</H1>
					<Paragraph className="mt-6">
						I&apos;m Munir, a frontend engineer in {site.location}. I build
						product interfaces for companies that live on data — fintech
						dashboards, ERP back offices, AI evaluation tooling — and I care
						about the unglamorous parts: loading states, empty states, keyboard
						access, and what happens when the request fails.
					</Paragraph>
					<Paragraph className="mt-4">
						I started out in 2022 building a biomedical AI platform at Omic,
						moved through e-commerce and ERP work at Stone Age Technologies,
						then spent two years on a cross-border payments platform at
						PlayStream. Since 2025 I&apos;ve been at Turing, building the
						interfaces that grade AI agents on Amazon Agentic — an AWS-owned
						initiative covering Kiro, Amazon Q and AWS Transform.
					</Paragraph>
					<Paragraph className="mt-4">
						Most of my work is React and TypeScript, but I&apos;m comfortable
						owning the layer underneath when the project needs it — Node and
						Express services, Prisma schemas, Redis-backed jobs, FastAPI
						endpoints. I like teams where the frontend is treated as an
						engineering discipline rather than a coat of paint.
					</Paragraph>
					<Paragraph className="mt-4">
						Outside of work I mentor algorithms at A2SV, the Google-backed
						program I came through myself, and I&apos;ve solved a little over
						550 problems on LeetCode and Codeforces.
					</Paragraph>
				</div>

				<aside className="col-span-full mt-10 lg:col-span-3 lg:col-start-10 lg:mt-0">
					<div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
						<H3 className="text-lg">Elsewhere</H3>
						<ul className="mt-4 space-y-2 text-base">
							<li>
								<a className="underlined" href={`mailto:${site.email}`}>
									{site.email}
								</a>
							</li>
							<li>
								<a className="underlined" href={site.github}>
									GitHub
								</a>
							</li>
							<li>
								<a className="underlined" href={site.linkedin}>
									LinkedIn
								</a>
							</li>
						</ul>
						<p className="mt-6 text-sm text-gray-500 dark:text-slate-500">
							{site.phone}
						</p>
					</div>
				</aside>
			</Grid>

			<Spacer size="xs" />

			<Grid>
				<div className="col-span-full">
					<H2>Skills</H2>
				</div>
				{skills.map((group) => (
					<div key={group.label} className="col-span-full mt-6 md:col-span-4">
						<H3 className="text-base tracking-wide text-gray-500 uppercase dark:text-slate-500">
							{group.label}
						</H3>
						<ul className="mt-3 space-y-1 text-base text-gray-700 dark:text-slate-300">
							{group.items.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				))}
			</Grid>

			<Spacer size="xs" />

			<Grid>
				<div className="col-span-full border-t border-gray-200 pt-8 dark:border-gray-700">
					<H2>Education</H2>
					<div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6">
						<p className="text-lg font-medium text-black dark:text-white">
							BSc Computer Science — Addis Ababa University
						</p>
						<span className="text-sm text-gray-500 dark:text-slate-500">
							2019 – 2023
						</span>
					</div>
					<p className="mt-2 max-w-3xl text-base text-gray-600 dark:text-slate-400">
						A2SV — Africa to Silicon Valley (Google-backed): competitive
						programming, data structures and algorithms, machine learning.
					</p>
				</div>
			</Grid>
		</main>
	)
}
