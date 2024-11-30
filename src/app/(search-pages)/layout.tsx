import type { Metadata } from 'next'

import Header from '@/components/header'
import BannerPlp from '@/components/banner-plp'

export const metadata: Metadata = {
	title: 'Search - Filtering Next App',
	description: 'Filters for your ecommerce.',
}

export default function SearchLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<BannerPlp />

			<Header />

			<main className='w-full mx-auto px-2 md:px-4 mt-[100px] md:mt-[270px]'>{children}</main>
		</>
	)
}
