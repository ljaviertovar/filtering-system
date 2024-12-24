'use client'

import { useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'

import { fetchProductsFromDummy } from '@/lib/api-products'

import { QueryFilter } from '../types.td'

export const useSearchProducts = () => {
	const searchParams = useSearchParams()

	let queryFilter: QueryFilter = {}

	for (const [key, value] of searchParams.entries()) {
		queryFilter = { ...queryFilter, [key]: value }
	}

	return useQuery({
		queryKey: ['products', queryFilter],
		queryFn: async () => fetchProductsFromDummy(queryFilter),
		staleTime: 5 * 60 * 1000,
	})
}
