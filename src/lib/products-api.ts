export const fetchProductsFromDummy = async (filters: { category?: string; priceMin?: number; priceMax?: number }) => {
	const params: Record<string, string | number> = {}

	if (filters.category) params.category = filters.category
	if (filters.priceMin) params.priceMin = filters.priceMin
	if (filters.priceMax) params.priceMax = filters.priceMax

	const query = new URLSearchParams(params as Record<string, string>).toString()
	const response = await fetch(`https://dummyjson.com/products?${query}`)

	if (!response.ok) {
		throw new Error('Error fetching products')
	}

	const data = await response.json()
	return data.products
}
