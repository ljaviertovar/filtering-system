import FilterSort from './filters-sort'
import FilterSheet from './filters-sheet'
import { LayoutGrid, LayoutList } from 'lucide-react'
import { Button } from '../ui/button'

export default function FiltersHeader() {
	return (
		<div className='w-full mx-auto flex justify-between md:justify-end items-center py-2 '>
			<FilterSheet />
			<div className='flex-1'>
				<p className='text-muted-foreground text-sm hidden md:block'>Showing 1-12 of 0 results</p>
			</div>
			<div className='flex items-center gap-2'>
				<FilterSort />
				<Button variant='ghost' size={'sm'} className='p-2'>
					<LayoutList size={20} className='text-muted-foreground' />
				</Button>
				<Button variant='ghost' size={'sm'} className='p-2'>
					<LayoutGrid size={20} className='' />
				</Button>
			</div>
		</div>
	)
}
