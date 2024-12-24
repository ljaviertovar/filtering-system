import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { Filters } from '.'
import Logo from '../logo'
import { ListFilter } from 'lucide-react'
import ExplainOn from '../explain-on'

export default function SheetFilters() {
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
				<Filters />
				<ExplainOn />
			</SheetContent>
		</Sheet>
	)
}
