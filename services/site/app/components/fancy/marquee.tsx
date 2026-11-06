import { motion, useReducedMotion } from 'framer-motion'

/**
 * Infinite marquee band, CSS-driven so it can pause on hover and shut off
 * completely under prefers-reduced-motion (see app.css).
 */
export function Marquee({ items }: { items: Array<string> }) {
	const shouldReduceMotion = useReducedMotion()
	const row = [...items, ...items]

	return (
		<div className="relative flex overflow-hidden border-y border-gray-200 py-4 dark:border-gray-800">
			<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent dark:from-gray-950" />
			<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent dark:from-gray-950" />
			<motion.div
				className="marquee-track flex shrink-0 items-center gap-10 pr-10"
				style={shouldReduceMotion ? { animation: 'none' } : undefined}
			>
				{row.map((item, index) => (
					<span
						key={`${item}-${index}`}
						className="flex items-center gap-10"
						aria-hidden={index >= items.length}
					>
						<span className="text-sm font-medium tracking-wide whitespace-nowrap text-gray-500 dark:text-slate-400">
							{item}
						</span>
						<span
							aria-hidden
							className="h-1 w-1 shrink-0 rounded-full bg-gradient-to-r from-indigo-400 to-emerald-400"
						/>
					</span>
				))}
			</motion.div>
		</div>
	)
}
