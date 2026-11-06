export function getSocialMetas({
	url,
	title = 'Munir Mohammed — Senior Frontend Developer',
	description = 'React, Next.js and TypeScript product work from Addis Ababa.',
	image,
	keywords = '',
	ogType = 'website',
}: {
	image?: string
	url: string
	title?: string
	description?: string
	keywords?: string
	ogType?: 'website' | 'article'
}) {
	return [
		{ title },
		{ name: 'description', content: description },
		{ name: 'keywords', content: keywords },
		{ name: 'image', content: image },
		{ property: 'og:url', content: url },
		{ property: 'og:title', content: title },
		{ property: 'og:description', content: description },
		{ property: 'og:image', content: image },
		{ property: 'og:type', content: ogType },
		{
			name: 'twitter:card',
			content: image ? 'summary_large_image' : 'summary',
		},
		{ name: 'twitter:title', content: title },
		{ name: 'twitter:description', content: description },
		{ name: 'twitter:image', content: image },
		{ name: 'twitter:image:alt', content: title },
	]
}
