export interface QueryFilter {
	category?: string
	color?: string
	size?: string
	sort?: string
	priceMin?: number
	priceMax?: number
}

export interface Filter {
	id: string
	label: string
	code?: string
	items?: Filter[]
}
