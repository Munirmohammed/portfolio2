import { redirect } from 'react-router'

export function loader() {
	throw redirect('/contact')
}

export default function RedirectRoute() {
	return null
}
