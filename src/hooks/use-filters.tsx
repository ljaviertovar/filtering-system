'use client'

import { useRouter, useSearchParams } from 'next/navigation'

export default function useFilters() {
	const router = useRouter()
	const searchParams = useSearchParams()

	const updateFilters = (key: string, value: string) => {
		const keyLower = key.toLowerCase()
		const valueLower = value.toLowerCase()

		const params = new URLSearchParams(searchParams.toString())

		console.log('hook', { params }, keyLower, valueLower)

		const param = params.get(keyLower)
		const values = param?.split(',') ?? []

		console.log({ param, values })

		if (values.includes(valueLower)) {
			console.log('CASE1')
			const newValues = values.filter(v => v !== valueLower)
			console.log({ newValues })
			console.log(newValues.join(','))
			if (newValues.length) {
				params.set(keyLower, newValues.join(','))
			} else {
				params.delete(keyLower)
			}
		} else {
			console.log('CASE2')
			params.set(keyLower, [...values, valueLower].join(','))
		}

		router.push(`?${decodeURIComponent(params.toString())}`)
	}

	return { updateFilters }
}
