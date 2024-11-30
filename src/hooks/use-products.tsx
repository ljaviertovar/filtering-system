import { useQuery } from '@tanstack/react-query'

export const useProducts = (filters: { category?: string; priceMin?: string; priceMax?: string }) => {
	return useQuery({
		queryKey: ['products', filters],
		queryFn: async () => {
			const params = new URLSearchParams(filters as Record<string, string>)
			const response = await fetch(`/api/products?${params.toString()}`)

			if (!response.ok) {
				throw new Error('Error fetching products')
			}

			const data = await response.json()
			return data.products
		},

		staleTime: 5 * 60 * 1000,
	})
}
