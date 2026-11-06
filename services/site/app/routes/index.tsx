import { motion, useReducedMotion } from 'framer-motion'
import * as React from 'react'
import { type MetaFunction } from 'react-router'
import { Grid } from '#app/components/grid.tsx'
import { HeroVisual } from '#app/components/munir-hero-visual.tsx'
import { Reveal } from '#app/components/reveal.tsx'
import { Spacer } from '#app/components/spacer.tsx'
import { experience, projects, site } from '#app/munir-content.ts'

export const meta: MetaFunction = () => [
	{ title: `${site.name} — ${site.role}` },
	{
		name: 'description',
		content: `${site.name} is a ${site.role.toLowerCase()} in ${site.location}, building React, Next.js and TypeScript products for fintech, commerce, ERP and AI teams.`,
	},
]

function Folio({
	left,
	right,
}: {
	left: React.ReactNode
	right?: React.ReactNode
}) {
	return (
		<div className="col-span-full flex items-baseline justify-between gap-6 border-t border-gray-900 pt-3 font-mono text-[0.65rem] tracking-[0.22em] text-gray-500 uppercase dark:border-white/80 dark:text-slate-500">
			<span>{left}</span>
			{right ? <span className="text-right">{right}</span> : null}
		</div>
	)
}

export default function Index() {
	const shouldReduceMotion = useReducedMotion()
	const year = new Date().getFullYear()

	const heroLines = [
		<p
			key="kicker"
			className="font-mono text-[0.7rem] tracking-[0.28em] text-gray-500 uppercase dark:text-slate-500"
		>
			Portfolio · {year}
		</p>,
		<h1
			key="name"
			className="mt-6 font-serif text-[3.4rem] leading-[0.9] tracking-[-0.02em] text-black sm:text-7xl md:text-[6.5rem] dark:text-white"
		>
			Munir
			<br />
			Mohammed
		</h1>,
		<div
			key="statement"
			className="mt-10 grid grid-cols-1 gap-8 border-t border-gray-300 pt-6 md:grid-cols-2 dark:border-gray-700"
		>
			<p className="font-serif text-2xl leading-snug text-gray-900 italic md:text-[1.7rem] dark:text-slate-200">
				Interfaces for money, inventory and AI — built to survive real data.
			</p>
			<p className="max-w-md text-base leading-relaxed text-gray-600 dark:text-slate-400">
				{site.blurb} Six years across fintech, ERP, e-commerce and AI
				evaluation, usually the person who owns the frontend end to end.
			</p>
		</div>,
		<div
			key="links"
			className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3"
		>
			<a
				href="/projects"
				className="group inline-flex items-center gap-2 border-b border-gray-900 pb-1 text-sm font-medium tracking-wide text-black dark:border-white dark:text-white"
			>
				View the index
				<span
					aria-hidden
					className="transition-transform duration-200 group-hover:translate-x-1"
				>
					→
				</span>
			</a>
			<a
				href="/contact"
				className="text-sm font-medium tracking-wide text-gray-500 underline-offset-4 transition hover:text-black hover:underline dark:text-slate-400 dark:hover:text-white"
			>
				Get in touch
			</a>
			<a
				href={site.github}
				className="text-sm font-medium tracking-wide text-gray-500 underline-offset-4 transition hover:text-black hover:underline dark:text-slate-400 dark:hover:text-white"
			>
				GitHub
			</a>
		</div>,
	]

	return (
		<>
			<Grid>
				<div className="col-span-full lg:col-span-7">
					<motion.div
						initial={shouldReduceMotion ? undefined : 'hidden'}
						animate="visible"
						variants={{
							hidden: {},
							visible: { transition: { staggerChildren: 0.08 } },
						}}
					>
						{heroLines.map((line) => (
							<motion.div
								key={line.key}
								variants={{
									hidden: { opacity: 0, y: 14 },
									visible: {
										opacity: 1,
										y: 0,
										transition: { duration: 0.5, ease: 'easeOut' },
									},
								}}
							>
								{line}
							</motion.div>
						))}
					</motion.div>
				</div>

				<aside className="col-span-full mt-14 lg:col-span-4 lg:col-start-9 lg:mt-2">
					<HeroVisual />
				</aside>
			</Grid>

			<Spacer size="xs" />

			<section>
				<Reveal>
					<Grid>
						<Folio left="01 / Selected work" right={site.location} />

						{projects.map((project, index) => (
							<a
								key={project.title}
								href="/projects"
								className="group col-span-full -mx-2 grid grid-cols-12 items-baseline gap-x-4 gap-y-1 border-b border-gray-200 px-2 py-6 transition-colors duration-200 hover:bg-gray-950 hover:text-white dark:border-gray-800 dark:hover:bg-white dark:hover:text-gray-950"
							>
								<span className="col-span-2 font-mono text-xs text-gray-400 md:col-span-1 dark:text-gray-600">
									{String(index + 1).padStart(2, '0')}
								</span>
								<span className="col-span-10 font-serif text-2xl tracking-tight md:col-span-5 md:text-[1.75rem]">
									{project.title}
								</span>
								<span className="col-span-6 col-start-3 text-sm text-gray-500 md:col-span-3 md:col-start-auto dark:text-slate-500">
									{project.stack.slice(0, 3).join(' / ')}
								</span>
								<span className="col-span-2 font-mono text-xs text-gray-500 md:col-span-2 dark:text-slate-500">
									{project.year}
								</span>
								<span
									aria-hidden
									className="col-span-1 text-right text-gray-300 transition-transform duration-200 group-hover:translate-x-1 dark:text-gray-600"
								>
									→
								</span>
							</a>
						))}
					</Grid>
				</Reveal>
			</section>

			<Spacer size="sm" />

			<section>
				<Reveal>
					<Grid>
						<Folio left="02 / Experience" right="2022 — present" />

						{experience.map((role) => (
							<div
								key={`${role.company}-${role.period}`}
								className="group col-span-full -mx-2 grid grid-cols-12 items-baseline gap-x-4 gap-y-2 border-b border-gray-200 px-2 py-7 transition-colors duration-200 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
							>
								<span className="col-span-12 font-mono text-[0.65rem] tracking-[0.18em] text-gray-500 uppercase md:col-span-2 dark:text-slate-500">
									{role.period}
								</span>
								<span className="col-span-12 md:col-span-5">
									<span className="block font-serif text-xl tracking-tight text-black dark:text-white">
										{role.company}
									</span>
									<span className="mt-1 block text-sm text-gray-500 dark:text-slate-500">
										{role.title} · {role.location}
									</span>
								</span>
								<span className="col-span-12 max-w-md text-sm leading-relaxed text-gray-600 md:col-span-5 dark:text-slate-400">
									{role.summary}
								</span>
							</div>
						))}

						<div className="col-span-full mt-8">
							<a
								href="/experience"
								className="group inline-flex items-center gap-2 border-b border-gray-900 pb-1 text-sm font-medium tracking-wide text-black dark:border-white dark:text-white"
							>
								Full experience
								<span
									aria-hidden
									className="transition-transform duration-200 group-hover:translate-x-1"
								>
									→
								</span>
							</a>
						</div>
					</Grid>
				</Reveal>
			</section>

			<Spacer size="sm" />

			<section className="pb-20">
				<Reveal>
					<Grid>
						<Folio left="03 / Contact" right="Open to remote" />

						<div className="col-span-full mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
							<a
								href={`mailto:${site.email}`}
								className="font-serif text-3xl leading-none tracking-tight break-all text-black underline decoration-gray-300 decoration-1 underline-offset-8 transition hover:decoration-black md:text-5xl dark:text-white dark:decoration-gray-700 dark:hover:decoration-white"
							>
								{site.email}
							</a>
							<div className="flex flex-wrap gap-6 font-mono text-[0.7rem] tracking-[0.18em] text-gray-500 uppercase dark:text-slate-500">
								<a
									href={site.github}
									className="transition hover:text-black dark:hover:text-white"
								>
									GitHub
								</a>
								<a
									href={site.linkedin}
									className="transition hover:text-black dark:hover:text-white"
								>
									LinkedIn
								</a>
								<span>{site.phone}</span>
							</div>
						</div>
					</Grid>
				</Reveal>
			</section>
		</>
	)
}
