import { type MetaFunction } from 'react-router'
import { Grid } from '#app/components/grid.tsx'
import { Spacer } from '#app/components/spacer.tsx'
import { H1, H2, Paragraph } from '#app/components/typography.tsx'
import { site } from '#app/munir-content.ts'

export const meta: MetaFunction = () => [
	{ title: `Contact — ${site.name}` },
	{
		name: 'description',
		content: `Get in touch with ${site.name} about senior frontend and full-stack work.`,
	},
]

const channels = [
	{
		label: 'Email',
		value: site.email,
		href: `mailto:${site.email}`,
		note: 'Best for anything substantive — I answer within a day or two.',
	},
	{
		label: 'LinkedIn',
		value: 'munir-mohammed',
		href: site.linkedin,
		note: 'Recruiters and hiring managers usually start here.',
	},
	{
		label: 'GitHub',
		value: 'Munirmohammed',
		href: site.github,
		note: 'Code, side projects and everything in progress.',
	},
]

export default function ContactRoute() {
	return (
		<main className="pb-24">
			<Grid>
				<div className="col-span-full lg:col-span-7">
					<H1>Let&apos;s talk</H1>
					<Paragraph className="mt-6">
						I&apos;m open to senior frontend and full-stack roles, remote or
						based in Addis Ababa, and to freelance work where the problem is
						interesting. The quickest route is email — I read everything, even
						when I can&apos;t reply.
					</Paragraph>
				</div>
			</Grid>

			<Spacer size="2xs" />

			<Grid>
				{channels.map((channel) => (
					<a
						key={channel.label}
						href={channel.href}
						className="col-span-full mt-6 block rounded-lg border border-gray-200 p-6 transition hover:border-gray-400 md:col-span-4 dark:border-gray-700 dark:hover:border-gray-500"
					>
						<H2 className="text-lg">{channel.label}</H2>
						<p className="mt-1 text-base font-medium text-gray-900 dark:text-white">
							{channel.value}
						</p>
						<p className="mt-3 text-sm text-gray-500 dark:text-slate-500">
							{channel.note}
						</p>
					</a>
				))}
			</Grid>

			<Spacer size="2xs" />

			<Grid>
				<div className="col-span-full border-t border-gray-200 pt-8 dark:border-gray-700">
					<dl className="grid grid-cols-1 gap-6 md:grid-cols-3">
						<div>
							<dt className="text-sm text-gray-500 dark:text-slate-500">
								Based in
							</dt>
							<dd className="text-base text-gray-900 dark:text-white">
								{site.location}
							</dd>
						</div>
						<div>
							<dt className="text-sm text-gray-500 dark:text-slate-500">
								Phone
							</dt>
							<dd className="text-base text-gray-900 dark:text-white">
								{site.phone}
							</dd>
						</div>
						<div>
							<dt className="text-sm text-gray-500 dark:text-slate-500">
								Availability
							</dt>
							<dd className="text-base text-gray-900 dark:text-white">
								Open to remote roles
							</dd>
						</div>
					</dl>
				</div>
			</Grid>
		</main>
	)
}
