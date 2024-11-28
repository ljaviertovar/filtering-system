'use client'

import Logo from './logo'
import NavbarRigth from './navbar-rigth'

import { useScrollPosition } from '@/hooks/use-scroll-position'

import { cn } from '@/lib/utils'

export default function Header() {
	const scrollPosition = useScrollPosition()

	return (
		<header
			className={cn(
				'sticky top-0 z-50 w-full mx-auto px-2 md:px-4',
				scrollPosition > 56
					? 'bg-background/40 shadow bg-opacity-60 backdrop-blur-lg backdrop-filter border-b'
					: 'bg-trasparent shadow-none'
			)}
		>
			<div className='max-w-7xl mx-auto flex items-center justify-between h-14'>
				<Logo />
				<div></div>
				<NavbarRigth />
			</div>
		</header>
	)
}
