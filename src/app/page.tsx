import { FiltersHeader, FiltersAside } from '@/components/filters'
import PLP from '@/components/plp'
import Empty from '@/components/products/empty'

export default function Home() {
	return (
		<div className='max-w-7xl mx-auto flex gap-2'>
			<aside className='w-[280px] hidden md:flex flex-col'>
				<FiltersAside />
			</aside>
			<div className='w-full'>
				<FiltersHeader />

				<section className='w-full p-2 md:p4'>
					<PLP />
					<Empty />
				</section>
			</div>
		</div>
	)
}
