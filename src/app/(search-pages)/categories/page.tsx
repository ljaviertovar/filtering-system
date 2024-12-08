'use client'

import { FiltersHeader, FiltersAside } from '@/components/filters'
import { BreadcrumbPlp, SearchResult } from '@/components/search'
import { useSearchProducts } from '@/hooks/use-search-products'

export default function CategoriesPage() {
	const { data, isLoading } = useSearchProducts()

	console.log({ data })

	return (
		<div className='max-w-7xl mx-auto flex flex-col'>
			<div className='w-full py-2'>
				<BreadcrumbPlp />
			</div>
			<div className='flex gap-2'>
				<aside className='w-[280px] hidden md:flex flex-col'>
					<FiltersAside />
				</aside>
				<div className='w-full'>
					<FiltersHeader />

					<section className='w-full p-2 md:p4'>
						<SearchResult data={data} isLoading={isLoading} />
					</section>
				</div>
			</div>
		</div>
	)
}
