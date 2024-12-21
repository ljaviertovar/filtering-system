'use client'

import { Suspense } from 'react'

import { HeaderFilters, AsideFilters } from '@/components/filters'
import { BreadcrumbPlp, SearchResult } from '@/components/search'

import { useSearchProducts } from '@/hooks/use-search-products'

function SearchComponent() {
	const { data, isLoading } = useSearchProducts()

	return (
		<div className='max-w-7xl mx-auto flex flex-col'>
			<div className='w-full py-2'>
				<BreadcrumbPlp />
			</div>
			<div className='flex gap-2'>
				<aside className='w-[280px] hidden md:flex flex-col'>
					<AsideFilters />
				</aside>
				<div className='w-full'>
					<HeaderFilters totalResults={data?.totalResults ?? 0} />

					<section className='w-full p-2 md:p4'>
						<SearchResult data={data} isLoading={isLoading} />
					</section>
				</div>
			</div>
		</div>
	)
}

export default function CategoriesPage() {
	return (
		<Suspense>
			<SearchComponent />
		</Suspense>
	)
}
