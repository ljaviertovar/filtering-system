import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Checkbox } from '../ui/checkbox'

import useFilters from '@/hooks/use-filters'

import { filters } from '@/data'
import { Filter } from '@/types.td'
import { DualRangeSlider } from '../ui/dual-range-slider'
import { useState } from 'react'

export default function Filters() {
	const [values, setValues] = useState([50, 200])

	const { filtersFromUrl, updateFilters } = useFilters()

	const defaultValues = filters.map(filter => filter.id)

	return (
		<Accordion type='multiple' className='w-full' defaultValue={[...defaultValues, 'price']}>
			{filters.map(filter => (
				<FilterItem key={filter.id} {...filter} filtersFromUrl={filtersFromUrl} updateFilters={updateFilters} />
			))}

			<AccordionItem value={'price'}>
				<AccordionTrigger className=' text-md text-muted-foreground hover:text-primary/80 hover:no-underline'>
					Price
				</AccordionTrigger>
				<AccordionContent>
					<div className='mt-8'>
						<DualRangeSlider
							label={value => <span>{value}</span>}
							value={values}
							onValueChange={values => {
								setValues(values)
								updateFilters('price', values.join(','))
							}}
							min={50}
							max={200}
							step={10}
						/>
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}

function FilterItem({
	id,
	label,
	items,
	filtersFromUrl,
	updateFilters,
}: Filter & {
	filtersFromUrl: Record<string, string | string[]>
	updateFilters: (key: string, value: string) => void
}) {
	return (
		<AccordionItem value={id}>
			<AccordionTrigger className=' text-md text-muted-foreground hover:text-primary/80 hover:no-underline'>
				{label}
			</AccordionTrigger>
			<AccordionContent key={id}>
				{items?.map(item => (
					<div className='flex items-center space-x-2 mb-2'>
						<Checkbox
							id={item.id}
							onCheckedChange={() => updateFilters(label, item.label)}
							checked={!!filtersFromUrl[id]?.includes(item.id)}
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
