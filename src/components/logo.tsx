import Link from 'next/link'

import applogo from '../../public/app-logo.png'
import Image from 'next/image'

export default function Logo() {
	return (
		<Link href='/' className='flex gap-1'>
			<Image priority src={applogo} alt='MyEcomm' className='w-5 h-5' />
			{/* {!isCollapsed && <span>My SaaS</span>} */}
			<span className='font-semibold leading-tight tracking-tighter'>MyEcomm</span>
		</Link>
	)
}
