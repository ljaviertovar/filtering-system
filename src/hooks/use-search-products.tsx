'use client'

import { useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'

import { fetchProductsFromDummy } from '@/lib/api-products'

import { ProductFilters } from '../types.td'

export const useSearchProducts = () => {
	const searchParams = useSearchParams()

	const productFilters: ProductFilters = {
		color: searchParams.get('color') ?? undefined,
		size: searchParams.get('size') ?? 'L',
		sort: searchParams.get('sort') ?? 'relevance',
	}

	console.log({ productFilters })

	return useQuery({
		queryKey: ['products', productFilters],
		queryFn: async () => fetchProductsFromDummy(productFilters),
		staleTime: 5 * 60 * 1000,
		enabled: !!productFilters.size,
	})
}
