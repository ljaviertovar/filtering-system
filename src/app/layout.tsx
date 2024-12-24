import type { Metadata } from 'next'

import Header from '@/components/header'
import Footer from '@/components/footer'

import './globals.css'
import QueryClientProviders from '@/components/providers/query-client-providers'

export const metadata: Metadata = {
	title: 'Home - Filtering Next App',
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
				<Header />

				<main className='w-full min-h-[calc(100vh-56px)] mx-auto px-2 md:px-4 mt-[100px] md:mt-[270px]'>
					<QueryClientProviders>{children}</QueryClientProviders>
				</main>

				<Footer />
			</body>
		</html>
	)
}
