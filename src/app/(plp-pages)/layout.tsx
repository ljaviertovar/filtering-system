import type { Metadata } from 'next'

import { BannerPlp } from '@/components/plp'

export const metadata: Metadata = {
	title: 'Search - Filtering Next App',
	description: 'Filters for your ecommerce.',
}

export default function PLPLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<BannerPlp />

			<main className='w-full mx-auto mt-[100px] md:mt-[270px]'>{children}</main>
		</>
	)
}
