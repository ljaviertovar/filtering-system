import { Filters } from '@/types.td'
import { fetchData } from './fetch-data'

export const fetchProductsFromDummy = async (filters: Filters) => {
	try {
		const query = JSON.stringify(filters)

		console.log('api', { query })

		const data = await fetchData('/api/products', {
			method: 'POST',
			body: JSON.stringify({ query }),
		})

		console.log('api-data', { data })

		return data
	} catch (error) {
		console.error(error)
	}
}
