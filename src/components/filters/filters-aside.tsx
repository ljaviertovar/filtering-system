'use client'

import { useRouter, useSearchParams } from 'next/navigation'

import { FiltersItems } from '.'

export default function FiltersAside() {
	const router = useRouter()
	const searchParams = useSearchParams()

	const updateFilter = (key: string, value: string) => {
		const params = new URLSearchParams(searchParams.toString())
		if (value) {
			params.set(key, value)
		} else {
			params.delete(key)
		}
		router.push(`?${params.toString()}`)
	}

	return (
		<>
			<div className='flex items-center h-12 py-2'>
				<span className='text-sm text-muted-foreground'>Filter by:</span>
			</div>

			<FiltersItems updateFilter={updateFilter} />
		</>
	)
}
