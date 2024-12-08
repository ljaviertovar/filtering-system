const WIX_URL = 'https://www.wixapis.com/stores/v1/'

export const fetchProductsFromDummy = async (filters: { category?: string; priceMin?: number; priceMax?: number }) => {
	try {
		const params: Record<string, string | number> = {}

		if (filters.category) params.category = filters.category
		if (filters.priceMin) params.priceMin = filters.priceMin
		if (filters.priceMax) params.priceMax = filters.priceMax

		const query = new URLSearchParams(params as Record<string, string>).toString()

		console.log('api', { query })

		const data = await fetchData(`${WIX_URL}products/query`, {
			method: 'POST',
			headers: {
				Authorization: process.env.NEXT_PUBLIC_WIX_API_KEY,
				'wix-site-id': process.env.NEXT_PUBLIC_WIX_SITE_ID,
				'Access-Control-Allow-Origin': '*',
			},
			body: JSON.stringify({
				query: {
					filter: '{"productOptions.size": "L"}}',
				},
			}),
		})

		console.log('api-data', { data })

		return data
	} catch (error) {
		console.error(error)
	}
}

async function fetchData(url: string, options: Record<string, any> = {}) {
	try {
		const defaultHeaders = {
			'Content-Type': 'application/json',
			Accept: 'application/json, text/plain, */*',
		}

		const config = {
			method: 'GET',
			headers: { ...defaultHeaders, ...options.headers },
			...options,
		}
		console.log({ config })

		const response = await fetch(url, config)

		if (!response.ok) {
			console.log(`Error: ${response.status} ${response.statusText}`)
			throw new Error(`Error: ${response.status} ${response.statusText}`)
		}

		return await response.json()
	} catch (error) {
		console.error(error)
		throw error
	}
}
