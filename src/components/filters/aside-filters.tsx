import { Filters } from '.'
import { Button } from '../ui/button'

import useFilters from '@/hooks/use-filters'

export default function AsideFilters() {
	const { clearFilters } = useFilters()

	return (
		<>
			<div className='flex flex-col h-12 py-2'>
				<span className='text-sm text-muted-foreground'>Filter by:</span>
				<div className='flex  justify-end '>
					<Button variant={'link'} onClick={clearFilters} className='text-xs w-fit px-0 text-black'>
						Clear filters
					</Button>
				</div>
			</div>

			<Filters />
		</>
	)
}
