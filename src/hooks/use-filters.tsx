'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function useFilters() {
	const [filtersFromUrl, setFiltersFromUrl] = useState<Record<string, string | string[]>>({})

	const router = useRouter()
	const searchParams = useSearchParams()

	const updateFilters = (key: string, value: string) => {
		const keyLower = key.toLowerCase()
		const valueLower = value.toLowerCase()

		const params = new URLSearchParams(searchParams.toString())
		const param = params.get(keyLower)
		const values = param?.split(',') ?? []

		if (values.includes(valueLower)) {
			const newValues = values.filter(v => v !== valueLower)
			if (newValues.length) {
				params.set(keyLower, newValues.join(','))
			} else {
				params.delete(keyLower)
			}
		} else {
			if (keyLower === 'price' || keyLower === 'sort') {
				params.set(keyLower, valueLower)
			} else {
				params.set(keyLower, [...values, valueLower].join(','))
			}
		}

		router.push(`?${decodeURIComponent(params.toString())}`)
	}

	const getFiltersFromUrl = () => {
		let filtersFromUrl = {}

		for (const [key, value] of searchParams.entries()) {
			if (value.includes(',')) {
				const values = value.split(',')
				filtersFromUrl = { ...filtersFromUrl, [key]: values }
			} else {
				filtersFromUrl = { ...filtersFromUrl, [key]: value }
			}
		}

		setFiltersFromUrl(filtersFromUrl)
	}

	const clearFilters = () => {
		router.push('/categories')
	}

	useEffect(() => {
		getFiltersFromUrl()
	}, [searchParams, getFiltersFromUrl])

	return { filtersFromUrl, updateFilters, clearFilters }
}
