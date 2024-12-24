import Link from 'next/link'

export default function ExplainOn() {
	return (
		<div className='py-2'>
			<p className='text-xs text-muted-foreground mx-auto'>
				Application explained on{' '}
				<Link
					href='https://hackernoon.com/u/ljaviertovar'
					className='underline font-semibold'
					target='_blank'
					rel='noopener noreferrer'
				>
					Hackernoon
				</Link>
			</p>
		</div>
	)
}
