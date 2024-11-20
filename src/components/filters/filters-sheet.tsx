import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { FiltersItems } from '.'
import Logo from '../logo'
import { ListFilter } from 'lucide-react'

export default function FiltersSheet() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='ghost' size={'sm'}>
					<ListFilter size={16} />
					Filters
				</Button>
			</SheetTrigger>
			<SheetContent side={'left'} className='w-[280px]'>
				<SheetHeader>
					<SheetTitle className='w-full mx-auto flex items-center justify-center h-14'>
						<Logo />
					</SheetTitle>
				</SheetHeader>
				<Separator />
				<FiltersItems />
			</SheetContent>
		</Sheet>
	)
}
