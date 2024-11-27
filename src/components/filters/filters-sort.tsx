'use client'

import { useState } from 'react'

import { Command, CommandGroup, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'

const options = [
	{
		value: 'name',
		label: 'Name',
	},
	{
		value: 'price-asc',
		label: 'Price ASC',
	},
	{
		value: 'price-desc',
		label: 'Price DESC',
	},
]

export default function FiltersSort() {
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState('')

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<div className='flex items-center'>
				<span className='text-sm text-muted-foreground'>Sort by:</span>
				<PopoverTrigger asChild>
					<Button
						variant='ghost'
						size={'sm'}
						role='combobox'
						aria-expanded={open}
						className='max-w-[120px] justify-between p-2'
					>
						{value ? options.find(option => option.value === value)?.label : 'Select ...'}
						<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
					</Button>
				</PopoverTrigger>
			</div>
			<PopoverContent className='w-[200px] p-0'>
				<Command>
					<CommandList>
						<CommandGroup>
							{options.map(option => (
								<CommandItem
									key={option.value}
									value={option.value}
									onSelect={currentValue => {
										setValue(currentValue === value ? '' : currentValue)
										setOpen(false)
									}}
								>
									<Check className={cn('mr-2 h-4 w-4', value === option.value ? 'opacity-100' : 'opacity-0')} />
									{option.label}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
