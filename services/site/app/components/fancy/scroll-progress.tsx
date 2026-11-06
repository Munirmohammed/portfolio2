import { motion, useScroll, useSpring } from 'framer-motion'

/** Thin gradient progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
	const { scrollYProgress } = useScroll()
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 24,
		restDelta: 0.001,
	})

	return (
		<motion.div
			aria-hidden
			className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400"
			style={{ scaleX }}
		/>
	)
}
