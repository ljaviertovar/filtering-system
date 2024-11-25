import type { Metadata } from 'next'

import Header from '@/components/header'

import './globals.css'
import Image from 'next/image'

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
				<div className='absolute w-full h-20 md:h-40  bg-gradient-to-b from-white/60 to-transparent -z-10'></div>
				<div className='absolute h-40 md:h-80 overflow-hidden top-0 left-0 -z-20 w-full '>
					<picture>
						<source media='(max-width: 768px)' srcSet='/images/search-banner-mobile2.jpg' />
						<source media='(min-width: 769px)' srcSet='/images/search-banner-2.jpg' />
						<Image
							src='/mages/search-banner-mobile.jpg' // Default image
							alt='Descriptive text for the image'
							width={500}
							height={300}
							layout='responsive'
							className='opacity-90'
						/>
					</picture>
				</div>
				<Header />

				<main className='w-full mx-auto px-2 md:px-4 mt-[100px] md:mt-[270px]'>{children}</main>
			</body>
		</html>
	)
}
