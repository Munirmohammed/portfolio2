import { Link } from 'react-router'
import { type ImageBuilder } from '#app/images.tsx'
import { site } from '#app/munir-content.ts'
import { AnchorOrLink } from '#app/utils/misc-react.tsx'
import { IconLink } from './icon-link.tsx'
import { GithubIcon, LinkedInIcon, MailIcon } from './icons.tsx'
import { H6 } from './typography.tsx'

function ContactSection() {
	return (
		<div>
			<H6 as="div">Contact</H6>
			<ul className="mt-4">
				<FooterLink name="Email" href={`mailto:${site.email}`} />
				<FooterLink name="LinkedIn" href={site.linkedin} />
				<FooterLink name="GitHub" href={site.github} />
			</ul>
		</div>
	)
}

function PagesSection() {
	return (
		<div>
			<H6 as="div">Pages</H6>
			<ul className="mt-4">
				<FooterLink name="Home" href="/" />
				<FooterLink name="Projects" href="/projects" />
				<FooterLink name="Experience" href="/experience" />
				<FooterLink name="About" href="/about" />
				<FooterLink name="Contact" href="/contact" />
			</ul>
		</div>
	)
}

function AboutSection() {
	return (
		<div>
			<p className="text-secondary max-w-md text-2xl">{site.role}</p>
			<p className="mt-3 max-w-sm text-base text-gray-500 dark:text-slate-500">
				React, Next.js and TypeScript — building interfaces that hold up under
				real data.
			</p>

			<div className="text-secondary mt-6 flex items-center gap-4">
				<IconLink href={site.github}>
					<GithubIcon size={32} />
				</IconLink>
				<IconLink href={site.linkedin}>
					<LinkedInIcon size={32} />
				</IconLink>
				<IconLink href={`mailto:${site.email}`}>
					<MailIcon size={32} />
				</IconLink>
			</div>
		</div>
	)
}

function FooterLink({
	name,
	href,
	reload,
}: {
	name: string
	href: string
	reload?: boolean
}) {
	return (
		<li className="py-1">
			<AnchorOrLink
				prefetch={href.startsWith('http') ? undefined : 'intent'}
				href={href}
				className="text-secondary underlined hover:text-team-current focus:text-team-current inline-block text-lg whitespace-nowrap focus:outline-none"
				reload={reload}
			>
				{name}
			</AnchorOrLink>
		</li>
	)
}

function Footer(_props: { image: ImageBuilder }) {
	return (
		<footer className="border-t border-gray-200 pt-24 pb-16 dark:border-gray-600">
			<div className="mx-10vw relative">
				<div className="relative mx-auto grid max-w-7xl grid-cols-4 gap-x-4 md:grid-cols-8 xl:grid-cols-12 xl:gap-x-6">
					<div className="col-span-full">
						<p className="bg-gradient-to-r from-gray-900 via-gray-500 to-gray-300 bg-clip-text text-[clamp(2.5rem,7.5vw,5.5rem)] leading-[0.95] font-semibold tracking-tight text-transparent dark:from-white dark:via-slate-500 dark:to-slate-700">
							{site.name}
						</p>
						<div className="mt-8 h-px w-full bg-gradient-to-r from-indigo-500/50 via-sky-400/30 to-transparent" />
					</div>

					<div className="col-span-full mt-16 md:col-span-4 md:mt-12">
						<AboutSection />
					</div>

					<div className="col-span-2 mt-20 md:col-span-2 md:col-start-5 md:mt-12 xl:col-start-8">
						<PagesSection />
					</div>

					<div className="col-span-2 mt-20 md:col-span-2 md:col-start-7 md:mt-12 xl:col-start-10">
						<ContactSection />
					</div>

					<div className="col-span-full mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-8 text-base text-gray-500 md:mt-28 dark:border-gray-800 dark:text-slate-500">
						<span>
							{`© ${site.name} ${new Date().getFullYear()} · Built with React Router and Tailwind`}
						</span>
						<a
							href="#top"
							className="underline-offset-4 transition hover:text-gray-900 hover:underline dark:hover:text-white"
						>
							Back to top ↑
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export { Footer }
