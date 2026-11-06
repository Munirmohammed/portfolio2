import { type MetaFunction } from 'react-router'
import { Grid } from '#app/components/grid.tsx'
import { Spacer } from '#app/components/spacer.tsx'
import { H1, H2, H3, Paragraph } from '#app/components/typography.tsx'
import { experience, site } from '#app/munir-content.ts'

export const meta: MetaFunction = () => [
	{ title: `Experience — ${site.name}` },
	{
		name: 'description',
		content: `${site.name}'s engineering experience across Turing (Amazon Agentic), PlayStream Interactive, Stone Age Technologies, Omic and A2SV.`,
	},
]

export default function ExperienceRoute() {
	return (
		<main className="pb-24">
			<Grid>
				<div className="col-span-full">
					<H1>Experience</H1>
					<Paragraph className="mt-4 max-w-2xl">
						Six years of shipping product interfaces, mostly on distributed
						remote teams across the US, Europe and Ethiopia.
					</Paragraph>
				</div>
			</Grid>

			<Spacer size="2xs" />

			{experience.map((role) => (
				<Grid key={`${role.company}-${role.period}`}>
					<article className="col-span-full border-t border-gray-200 py-8 dark:border-gray-700">
						<div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
							<H2 className="text-2xl md:text-3xl">{role.company}</H2>
							<span className="text-sm whitespace-nowrap text-gray-500 dark:text-slate-500">
								{role.period} · {role.location}
							</span>
						</div>

						<H3 className="mt-1 text-lg text-gray-700 md:text-xl dark:text-slate-300">
							{role.title}
						</H3>

						{role.summary ? (
							<p className="mt-3 max-w-3xl text-base text-gray-600 dark:text-slate-400">
								{role.summary}
							</p>
						) : null}

						<ul className="mt-4 max-w-3xl space-y-2">
							{role.highlights.map((highlight) => (
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

						<p className="mt-5 font-mono text-xs text-gray-500 dark:text-slate-500">
							{role.stack.join(' · ')}
						</p>
					</article>
				</Grid>
			))}
		</main>
	)
}
