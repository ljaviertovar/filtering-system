import { AudioWaveform } from 'lucide-react'
import Link from 'next/link'

export default function Logo() {
	return (
		<Link href='/' className='flex gap-1'>
			<AudioWaveform className='w-5 h-5 rotate-45' />
			<span className='font-bold leading-tight tracking-tighter text-lg'>MyEcomm</span>
		</Link>
	)
}
