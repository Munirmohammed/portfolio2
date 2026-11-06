import { redirect } from 'react-router'

export function loader() {
	throw redirect('/experience')
}

export default function RedirectRoute() {
	return null
}
