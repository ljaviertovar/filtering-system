import { FiltersHeader, FiltersAside } from '@/components/filters'

export default function Home() {
	return (
		<div className='max-w-7xl mx-auto flex'>
			<aside className='w-[280px] hidden md:flex flex-col'>
				<FiltersAside />
			</aside>
			<div className='w-full'>
				<FiltersHeader />
				<section className='w-full p-2 md:p4'></section>
			</div>
		</div>
	)
}
