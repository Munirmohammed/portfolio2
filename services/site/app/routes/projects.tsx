import { type MetaFunction } from 'react-router'
import { Grid } from '#app/components/grid.tsx'
import { Spacer } from '#app/components/spacer.tsx'
import { H1, H2, H3, Paragraph } from '#app/components/typography.tsx'
import { projects, site } from '#app/munir-content.ts'

export const meta: MetaFunction = () => [
	{ title: `Projects — ${site.name}` },
	{
		name: 'description',
		content: `Selected engineering work by ${site.name}: React and Next.js products, an ML-backed FastAPI platform, a voice-AI console and a full-stack marketplace.`,
	},
]

export default function ProjectsRoute() {
	return (
		<main className="pb-24">
			<Grid>
				<div className="col-span-full">
					<H1>Projects</H1>
					<Paragraph className="mt-4 max-w-2xl">
						Things I have designed and built end to end — from the component
						architecture down to the schema and the deploy. Each one links to
						code, and to a live build where there is one.
					</Paragraph>
				</div>
			</Grid>

			<Spacer size="2xs" />

			{projects.map((project) => (
				<Grid key={project.title}>
					<article className="col-span-full border-t border-gray-200 py-10 dark:border-gray-700">
						<div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
							<H2 className="text-2xl md:text-3xl">{project.title}</H2>
							<span className="text-sm text-gray-500 dark:text-slate-500">
								{project.year}
							</span>
						</div>

						<p className="mt-3 max-w-3xl text-lg text-gray-600 dark:text-slate-400">
							{project.summary}
						</p>

						<ul className="mt-5 max-w-3xl space-y-2">
							{project.highlights.map((highlight) => (
								<li
									key={highlight}
									className="flex gap-2 text-base text-gray-600 dark:text-slate-400"
								>
									<span aria-hidden className="text-gray-400">
										—
									</span>
									<span>{highlight}</span>
								</li>
							))}
						</ul>

						<div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
							<p className="font-mono text-xs text-gray-500 dark:text-slate-500">
								{project.stack.join(' · ')}
							</p>
							{project.links.map((link) => (
								<a
									key={link.href}
									href={link.href}
									className="underlined text-sm font-medium text-gray-900 dark:text-white"
								>
									{link.label} →
								</a>
							))}
						</div>
					</article>
				</Grid>
			))}

			<Spacer size="xs" />

			<Grid>
				<div className="col-span-full border-t border-gray-200 pt-10 dark:border-gray-700">
					<H3>Everything else</H3>
					<p className="mt-3 max-w-2xl text-base text-gray-600 dark:text-slate-400">
						More repositories — experiments, exercises and older client work —
						live on{' '}
						<a
							href={site.github}
							className="underlined text-gray-900 dark:text-white"
						>
							GitHub
						</a>
						.
					</p>
				</div>
			</Grid>
		</main>
	)
}
