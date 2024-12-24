import Link from 'next/link'

export default function Footer() {
	return (
		<footer className='w-full bg-muted text-center py-4'>
			<div className='max-w-7xl mx-auto flex items-center justify-between'>
				<p className='text-xs mx-auto'>
					Develop by{' '}
					<Link
						href='https://www.ljaviertovar.dev/'
						className='underline font-semibold'
						target='_blank'
						rel='noopener noreferrer'
					>
						ljaviertovar.dev
					</Link>
				</p>
			</div>
		</footer>
	)
}
