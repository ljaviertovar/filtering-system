'use client'

import { Filters } from '.'

import useFilters from '@/hooks/use-filters'

export default function AsideFilters() {
	const { updateFilters } = useFilters()

	return (
		<>
			<div className='flex items-center h-12 py-2'>
				<span className='text-sm text-muted-foreground'>Filter by:</span>
			</div>

			<Filters updateFilters={updateFilters} />
		</>
	)
}
