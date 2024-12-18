import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Checkbox } from '../ui/checkbox'

import useFilters from '@/hooks/use-filters'

import { filters } from '@/data'
import { Filter } from '@/types.td'

export default function Filters() {
	const defaultValues = filters.map(filter => filter.id)

	return (
		<Accordion type='multiple' className='w-full' defaultValue={defaultValues}>
			{filters.map(filter => (
				<FilterItem key={filter.id} {...filter} />
			))}
		</Accordion>
	)
}

function FilterItem({ id, label, items }: Filter) {
	const { filtersFromUrl, updateFilters } = useFilters()

	return (
		<AccordionItem value={id}>
			<AccordionTrigger className='font-semibold text-md text-primary hover:text-primary/80 hover:no-underline'>
				{label}
			</AccordionTrigger>
			<AccordionContent>
				{items?.map(item => (
					<div className='flex items-center space-x-2 mb-2'>
						<Checkbox
							id={item.id}
							onCheckedChange={() => updateFilters(label, item.label)}
							checked={filtersFromUrl[id]?.includes(item.id)}
						/>
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
