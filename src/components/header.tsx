import Logo from './logo'

export default function Header() {
	return (
		<header className='w-full border-b-2 border-muted'>
			<div className='max-w-7xl mx-auto flex items-center p-2 md:p-4 h-14'>
				<Logo />
			</div>
		</header>
	)
}
