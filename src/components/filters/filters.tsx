import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Checkbox } from '../ui/checkbox'

import { filters } from '@/data'
import { Filter } from '@/types.td'

interface Props {
	updateFilters: (key: string, value: string) => void
}

export default function Filters({ updateFilters }: Props) {
	return (
		<Accordion type='multiple' className='w-full' defaultValue={['color', 'size', 'price']}>
			{filters.map(filter => (
				<FilterItem key={filter.id} {...filter} updateFilters={updateFilters} />
			))}
		</Accordion>
	)
}

function FilterItem({ id, label, items, updateFilters }: Filter & Props) {
	return (
		<AccordionItem value={id}>
			<AccordionTrigger className='font-semibold text-md text-primary hover:text-primary/80 hover:no-underline'>
				{label}
			</AccordionTrigger>
			<AccordionContent>
				{items?.map(item => (
					<div className='flex items-center space-x-2 mb-2'>
						<Checkbox id={item.id} onCheckedChange={() => updateFilters(label, item.label)} />
						<label
							htmlFor={item.id}
							className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
						>
							{item.label}
						</label>
					</div>
				))}
			</AccordionContent>
		</AccordionItem>
	)
}
