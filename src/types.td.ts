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

export interface Product {
	id: string
	name: string
	description: string
	priceData: {
		formatted: {
			price: string
		}
	}
	media: {
		mainMedia: {
			image: {
				url: string
				title: string
			}
			title: string
		}
	}
}

export enum Colors {
	blue = '#48A2EB',
	yellow = '#ffdf00',
	black = '#000000',
	white = '#ffffff',
}
