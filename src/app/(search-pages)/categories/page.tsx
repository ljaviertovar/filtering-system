import BreadcrumbSearch from '@/components/breadcrumb-search'
import { HeaderFilters, AsideFilters } from '@/components/filters'
import Empty from '@/components/products/empty'

export default function CategoriesPage() {
	return (
		<div className='max-w-7xl  mx-auto mb-12 flex flex-col'>
			<div className='w-full py-2'>
				<BreadcrumbSearch />
			</div>
			<div className='flex gap-2'>
				<aside className='w-[280px] hidden md:flex flex-col'>
					<AsideFilters />
				</aside>
				<div className='w-full'>
					<HeaderFilters />

					<section className='w-full p-2 md:p4'>
						<Empty />
					</section>
				</div>
			</div>
		</div>
	)
}
