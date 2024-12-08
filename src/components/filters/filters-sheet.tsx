import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { FiltersItems } from '.'
import Logo from '../logo'
import { ListFilter } from 'lucide-react'

export default function FiltersSheet() {
	const updateFilter = (key: string, value: string) => {
		return null
	}

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
				</SheetHeader>
				<Separator />
				<FiltersItems updateFilter={updateFilter} />
			</SheetContent>
		</Sheet>
	)
}
