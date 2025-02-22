'use client'

import { useEffect, useState } from 'react'

import { Command, CommandGroup, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Check, ChevronsUpDown } from 'lucide-react'

import useFilters from '@/hooks/use-filters'

import { cn } from '@/lib/utils'

import { sortOptions } from '@/data'

export default function SortFilters() {
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState('')

	const { filtersFromUrl, updateFilters } = useFilters()

	useEffect(() => {
		if (filtersFromUrl.sort) {
			const optionfromUrl = sortOptions.filter(option => option.value === filtersFromUrl.sort)
			if (optionfromUrl.length) {
				setValue(filtersFromUrl.sort as string)
			}
		}
	}, [filtersFromUrl])

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
						{value ? sortOptions.find(option => option.value === value)?.label : 'Select ...'}
						<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
					</Button>
				</PopoverTrigger>
			</div>
			<PopoverContent className='w-[200px] p-0'>
				<Command>
					<CommandList>
						<CommandGroup>
							{sortOptions.map(option => (
								<CommandItem
									key={option.value}
									value={option.value}
									onSelect={currentValue => {
										setValue(currentValue === value ? '' : currentValue)
										updateFilters('sort', currentValue)
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
