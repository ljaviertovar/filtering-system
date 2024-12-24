import { fetchData } from './fetch-data'

import { QueryFilter } from '@/types.td'

export const fetchProductsFromDummy = async (queryFilter: QueryFilter) => {
	try {
		const queryFilterParsed = JSON.stringify(queryFilter)

		const data = await fetchData('/api/products', {
			method: 'POST',
			body: JSON.stringify({ queryFilter: queryFilterParsed }),
		})

		return data
	} catch (error) {
		console.error(error)
	}
}
