'use client'

import { useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'

import { fetchProductsFromDummy } from '@/lib/api-products'

import { QueryFilter } from '../types.td'

export const useSearchProducts = () => {
	const searchParams = useSearchParams()

	const queryFilter: QueryFilter = {
		color: searchParams.get('color') ?? undefined,
		size: searchParams.get('size') ?? 'L',
		sort: searchParams.get('sort') ?? '',
	}

	console.log({ queryFilter })

	return useQuery({
		queryKey: ['products', queryFilter],
		queryFn: async () => fetchProductsFromDummy(queryFilter),
		staleTime: 5 * 60 * 1000,
	})
}
