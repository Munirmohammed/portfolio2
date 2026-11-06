import { type MetaFunction } from 'react-router'
import { HeroSection } from '#app/components/sections/hero-section.tsx'
import { images } from '#app/images.tsx'
import { type KCDHandle } from '#app/types.ts'

export const handle: KCDHandle = {
	getSitemapEntries: () => null,
}

export const meta: MetaFunction = () => {
	return [{ title: "Ain't nothing here" }]
}

export default function NotFoundPage() {
	return (
		<main>
			<HeroSection
				title="404 - Oh no, you found a page that's missing stuff."
				subtitle="This page could not be found."
				imageBuilder={images.bustedOnewheel}
			/>
		</main>
	)
}
