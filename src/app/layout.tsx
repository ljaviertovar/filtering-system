import type { Metadata } from 'next'

import Header from '@/components/header'
import BannerPlp from '@/components/banner-plp'

import './globals.css'

export const metadata: Metadata = {
	title: 'Filtering Next App',
	description: 'Filters for your ecommerce.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' type='image/png' href='/favicon/favicon-96x96.png' sizes='96x96' />
				<link rel='icon' type='image/svg+xml' href='/favicon/favicon.svg' />
				<link rel='shortcut icon' href='/favicon/favicon.ico' />
				<link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
				<link rel='manifest' href='/favicon/site.webmanifest' />
			</head>
			<body>
				<BannerPlp />

				<Header />

				<main className='w-full mx-auto px-2 md:px-4 mt-[100px] md:mt-[270px]'>{children}</main>
			</body>
		</html>
	)
}
