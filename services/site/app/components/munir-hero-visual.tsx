import { motion, useReducedMotion } from 'framer-motion'
import * as React from 'react'
import { site } from '#app/munir-content.ts'

function initials(name: string) {
	return name
		.split(' ')
		.map((part) => part[0])
		.join('')
}

const facts = [
	{ label: 'Based', value: 'Addis Ababa, ET' },
	{ label: 'Focus', value: 'Product interfaces' },
	{ label: 'Stack', value: 'React · TS · Next' },
	{ label: 'Status', value: 'Open to remote' },
]

/**
 * Identity card: a printed-spec-sheet panel rather than a glassy avatar card.
 * Bordered, monospaced metadata, one blinking cursor — no gradients.
 */
export function HeroVisual() {
	const shouldReduceMotion = useReducedMotion()
	const monogram = React.useMemo(() => initials(site.name), [])

	return (
		<motion.div
			initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
			className="border border-gray-300 dark:border-gray-700"
		>
			<div className="flex items-center justify-between border-b border-gray-300 px-4 py-2 dark:border-gray-700">
				<span className="font-mono text-[0.65rem] tracking-[0.22em] text-gray-500 uppercase dark:text-slate-500">
					Identity
				</span>
				<span className="font-mono text-[0.65rem] text-gray-400 dark:text-gray-600">
					2019 — 2026
				</span>
			</div>

			<div className="flex items-center gap-4 border-b border-gray-300 px-4 py-6 dark:border-gray-700">
				<div className="flex h-16 w-16 shrink-0 items-center justify-center border border-gray-900 font-serif text-2xl dark:border-white dark:text-white">
					{monogram}
				</div>
				<div>
					<p className="text-lg leading-tight font-medium text-black dark:text-white">
						{site.name}
					</p>
					<p className="mt-1 font-mono text-[0.7rem] text-gray-500 uppercase dark:text-slate-500">
						{site.role}
					</p>
				</div>
			</div>

			<dl className="divide-y divide-gray-300 dark:divide-gray-700">
				{facts.map((fact) => (
					<div
						key={fact.label}
						className="flex items-baseline justify-between gap-4 px-4 py-2.5"
					>
						<dt className="font-mono text-[0.65rem] tracking-[0.18em] text-gray-500 uppercase dark:text-slate-500">
							{fact.label}
						</dt>
						<dd className="text-right font-mono text-xs text-gray-900 dark:text-slate-200">
							{fact.value}
						</dd>
					</div>
				))}
			</dl>

			<div className="flex items-center gap-2 border-t border-gray-300 px-4 py-3 dark:border-gray-700">
				<motion.span
					aria-hidden
					className="h-1.5 w-1.5 bg-emerald-600 dark:bg-emerald-400"
					animate={shouldReduceMotion ? undefined : { opacity: [1, 0.2, 1] }}
					transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
				/>
				<span className="font-mono text-[0.65rem] tracking-[0.18em] text-gray-500 uppercase dark:text-slate-500">
					Available for work
				</span>
			</div>
		</motion.div>
	)
}
