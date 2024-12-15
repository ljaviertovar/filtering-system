import { fetchData } from './fetch-data'

import { ProductFilters } from '@/types.td'

export const fetchProductsFromDummy = async (prductFilters: ProductFilters) => {
	try {
		const filters = JSON.stringify(prductFilters)

		const data = await fetchData('/api/products', {
			method: 'POST',
			body: JSON.stringify({ filters }),
		})

		return data
	} catch (error) {
		console.error(error)
	}
}
