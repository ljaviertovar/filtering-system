'use client'

import { useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { fetchProductsFromDummy } from '@/lib/api-products'
import { Filters } from '../types.td'

export const useSearchProducts = () => {
	const searchParams = useSearchParams()

	console.log({ searchParams })

	const filters: Filters = {
		color: searchParams.get('color') ?? undefined,
		size: searchParams.get('size') ?? undefined,
		sort: searchParams.get('sort') ?? 'relevance',
	}

	return useQuery({
		queryKey: ['products', filters],
		queryFn: async () => fetchProductsFromDummy(filters),
		staleTime: 5 * 60 * 1000,
	})
}
