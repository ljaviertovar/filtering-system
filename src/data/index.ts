import { Filter } from '@/types.td'

export const filters: Filter[] = [
	{
		id: 'color',
		label: 'Color',
		items: [
			{ id: 'black', label: 'Black', code: '#000000' },
			{ id: 'white', label: 'White', code: '#ffffff' },
			{ id: 'blue', label: 'Blue', code: '#48a2eb' },
			{ id: 'yellow', label: 'Yellow', code: '#ffdf00' },
		],
	},
	{
		id: 'size',
		label: 'Size',
		items: [
			{ id: 's', label: 'S' },
			{ id: 'm', label: 'M' },
			{ id: 'l', label: 'L' },
		],
	},
	{
		id: 'type',
		label: 'Type',
		items: [
			{ id: 'shirt', label: 'Shirt' },
			{ id: 'jacket', label: 'Jacket' },
		],
	},
]
