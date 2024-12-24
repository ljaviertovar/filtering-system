import SortFilters from './sort-filters'
import SheetFilters from './sheet-filters'
import { LayoutGrid, LayoutList } from 'lucide-react'
import { Button } from '../ui/button'

interface Props {
	totalResults: number
}

export default function HeaderFilters({ totalResults }: Props) {
	return (
		<div className='w-full mx-auto flex justify-between md:justify-end items-center py-2 '>
			<SheetFilters />
			<div className='flex-1'>
				<p className='text-muted-foreground text-sm hidden md:block'>Showing 1-12 of {totalResults} results</p>
			</div>
			<div className='flex items-center gap-2'>
				<SortFilters />
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
