import { FiltersHeader, FiltersAside } from '@/components/filters'
import Empty from '@/components/products/empty'

export default function CategoriesPage() {
	return (
		<div className='max-w-7xl mx-auto flex gap-2'>
			<aside className='w-[280px] hidden md:flex flex-col'>
				<FiltersAside />
			</aside>
			<div className='w-full'>
				<FiltersHeader />

				<section className='w-full p-2 md:p4'>
					<Empty />
				</section>
			</div>
		</div>
	)
}
