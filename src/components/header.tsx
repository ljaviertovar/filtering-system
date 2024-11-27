import Logo from './logo'
import NavbarRigth from './navbar-rigth'

export default function Header() {
	return (
		<header className='w-full mx-auto px-2 md:px-4'>
			<div className='max-w-7xl mx-auto flex items-center justify-between h-14'>
				<Logo />
				<div></div>
				<NavbarRigth />
			</div>
		</header>
	)
}
