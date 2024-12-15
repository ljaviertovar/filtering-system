import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function Filters() {
	return (
		<Accordion type='multiple' className='w-full' defaultValue={['color', 'size', 'price']}>
			<AccordionItem value='color'>
				<AccordionTrigger className='font-semibold text-md text-primary hover:text-primary/80 hover:no-underline'>
					Color
				</AccordionTrigger>
				<AccordionContent>All Colors</AccordionContent>
			</AccordionItem>
			<AccordionItem value='size'>
				<AccordionTrigger className='font-semibold text-md text-primary hover:text-primary/80 hover:no-underline'>
					Size
				</AccordionTrigger>
				<AccordionContent>All sizes</AccordionContent>
			</AccordionItem>
			<AccordionItem value='price'>
				<AccordionTrigger className='font-semibold text-md text-primary hover:text-primary/80 hover:no-underline'>
					Price
				</AccordionTrigger>
				<AccordionContent>All prices</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
