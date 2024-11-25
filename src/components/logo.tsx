import Link from 'next/link'

import applogo from '../../public/app-logo.png'
import Image from 'next/image'

export default function Logo() {
	return (
		<Link href='/' className='flex gap-1'>
			<Image priority src={applogo} alt='MyEcomm' className='w-5 h-5' />
			<span className='font-bold leading-tight tracking-tighter  text-lg'>MyEcomm</span>
		</Link>
	)
}
