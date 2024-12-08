import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function FiltersItems({
	updateFilter,
}: // filters,
{
	updateFilter: (key: string, value: string) => void
	// filters: Record<string, string>
}) {
	return (
		<Accordion type='multiple' className='w-full' defaultValue={['color', 'size', 'price']}>
			<AccordionItem value='color'>
				<AccordionTrigger className='font-semibold text-md text-primary hover:text-primary/80 hover:no-underline'>
					Color
				</AccordionTrigger>
				<AccordionContent>
					<button onClick={() => updateFilter('color', 'red')}>Red</button>
					<button onClick={() => updateFilter('color', 'blue')}>Blue</button>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='size'>
				<AccordionTrigger className='font-semibold text-md text-primary hover:text-primary/80 hover:no-underline'>
					Size
				</AccordionTrigger>
				<AccordionContent>
					<button onClick={() => updateFilter('size', 'M')}>Medium</button>
					<button onClick={() => updateFilter('size', 'L')}>Large</button>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='price'>
				<AccordionTrigger className='font-semibold text-md text-primary hover:text-primary/80 hover:no-underline'>
					Price
				</AccordionTrigger>
				<AccordionContent>
					<button onClick={() => updateFilter('price', 'low')}>Low</button>
					<button onClick={() => updateFilter('price', 'high')}>High</button>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
