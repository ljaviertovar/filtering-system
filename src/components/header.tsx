import Logo from './logo'

export default function Header() {
	return (
		<header className='w-full mx-auto px-2 md:px-4'>
			<div className='max-w-7xl mx-auto flex items-center  h-14'>
				<Logo />
			</div>
		</header>
	)
}
