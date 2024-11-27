import { PackageOpen } from 'lucide-react'

export default function Empty() {
	return (
		<div className='grid place-content-center py-40 md:py-80'>
			<PackageOpen className='mx-auto w-16 h-16 md:w-20 md:h-20 text-muted-foreground/80' />
			<p className='text-center  text-lg md:text-2xl mt-4 text-muted-foreground'>No products found.</p>
		</div>
	)
}
