import * as React from 'react'
import { CheckIcon, CopyIcon } from '#app/components/icons.tsx'

/**
 * Email address with a copy-to-clipboard affordance. Falls back to a mailto
 * link when the clipboard API is unavailable.
 */
export function CopyEmail({ email }: { email: string }) {
	const [copied, setCopied] = React.useState(false)
	const [failed, setFailed] = React.useState(false)
	const timeout = React.useRef<ReturnType<typeof setTimeout> | null>(null)

	React.useEffect(() => {
		return () => {
			if (timeout.current) clearTimeout(timeout.current)
		}
	}, [])

	const copy = async () => {
		try {
			await navigator.clipboard.writeText(email)
			setCopied(true)
			setFailed(false)
		} catch {
			setFailed(true)
		}
		if (timeout.current) clearTimeout(timeout.current)
		timeout.current = setTimeout(() => {
			setCopied(false)
			setFailed(false)
		}, 2000)
	}

	return (
		<button
			type="button"
			onClick={copy}
			className="group inline-flex items-center gap-3 rounded bg-white px-6 py-3 font-medium text-gray-900 transition hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
			aria-live="polite"
		>
			<span>{failed ? 'Press ⌘C to copy' : email}</span>
			<span className="text-gray-500 transition group-hover:text-gray-900">
				{copied ? <CheckIcon /> : <CopyIcon />}
			</span>
			<span className="sr-only">
				{copied ? 'Email address copied' : 'Copy email address'}
			</span>
		</button>
	)
}
