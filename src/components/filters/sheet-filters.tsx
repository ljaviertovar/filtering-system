import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { Filters } from '.'
import Logo from '../logo'

import { ListFilter } from 'lucide-react'
import ExplainOn from '../explain-on'

import useFilters from '@/hooks/use-filters'

export default function SheetFilters() {
	const { clearFilters } = useFilters()

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='ghost' size={'sm'} className='md:hidden p-2'>
					<ListFilter size={16} />
					Filters
				</Button>
			</SheetTrigger>
			<SheetContent side={'left'} className='w-[280px]'>
				<SheetHeader className='pb-4'>
					<div className='w-full mx-auto flex items-center justify-center h-14'>
						<Logo />
					</div>
					<SheetTitle className='text-sm text-muted-foreground font-normal text-left'>Fliter by:</SheetTitle>
					<div className='flex  justify-end '>
						<Button variant={'link'} onClick={clearFilters} className='text-xs w-fit px-0 text-black'>
							Clear filters
						</Button>
					</div>
				</SheetHeader>

				<Filters />
				<ExplainOn />
			</SheetContent>
		</Sheet>
	)
}
