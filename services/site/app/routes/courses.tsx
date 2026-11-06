import { redirect } from 'react-router'

export function loader() {
	throw redirect('/projects')
}

export default function RedirectRoute() {
	return null
}
