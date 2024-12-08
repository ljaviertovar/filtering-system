'use client'

import { useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { fetchProductsFromDummy } from '@/lib/api-products'

export const useSearchProducts = () => {
	const searchParams = useSearchParams()

	const filters = {
		color: searchParams.get('color') || '',
		size: searchParams.get('size') || '',
		price: searchParams.get('price') || '',
		sort: searchParams.get('sort') || 'relevance',
	}

	return useQuery({
		queryKey: ['products', filters],
		queryFn: async () => fetchProductsFromDummy(filters),

		staleTime: 5 * 60 * 1000,
	})
}
