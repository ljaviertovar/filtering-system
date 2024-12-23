import { fetchData } from '@/lib/fetch-data'
import { Colors } from '@/types.td'

const WIX_URL = 'https://www.wixapis.com/stores/v1/'

export async function POST(request: Request) {
	try {
		const req = await request.json()
		const queryFilterParsed = JSON.parse(req.queryFilter)

		let query = {}
		if (Object.keys(queryFilterParsed).length) {
			query = getQuery(queryFilterParsed)
		}

		const data = await fetchData(`${WIX_URL}products/query`, {
			method: 'POST',
			headers: {
				Authorization: process.env.NEXT_WIX_API_KEY,
				'wix-site-id': process.env.NEXT_WIX_SITE_ID,
			},
			body: JSON.stringify({
				query,
			}),
		})

		return Response.json(data)
	} catch (error) {
		console.error('Error fetching products:', error)
		return Response.json({ error: 'Failed to fetch products' }, { status: 500 })
	}
}

// const getQuery = (queryFilterParsed: Record<string, any>) => {
// 	let filter: Record<string, any>[] = []
// 	let sort: Record<string, any>[] = []

// 	for (const key in queryFilterParsed) {
// 		if (key === 'color') {
// 			const colors = queryFilterParsed[key].split(',')
// 			const colorIds = colors.map((color: keyof typeof Colors) => Colors[color])

// 			filter = [...filter, { [`productOptions.${key}`]: colorIds }]
// 		} else if (key === 'price') {
// 			const [min, max] = queryFilterParsed[key].split(',')
// 			filter = [
// 				...filter,
// 				{
// 					[`priceData.${key}`]: { $gte: parseInt(min) },
// 				},
// 				{
// 					[`priceData.${key}`]: { $lte: parseInt(max) },
// 				},
// 			]
// 		} else if (key === 'sort') {
// 			const [field, order] = queryFilterParsed[key].split('-')
// 			sort = [{ [`${field}`]: order }]
// 		} else {
// 			filter = [...filter, { [`productOptions.${key}`]: queryFilterParsed[key].split(',') }]
// 		}
// 	}

// 	let query = {}
// 	if (Object.hasOwn(queryFilterParsed, 'price')) {
// 		query = {
// 			filter: JSON.stringify({ $and: filter }),
// 			...(Object.hasOwn(queryFilterParsed, 'sort') && { sort: JSON.stringify(sort) }),
// 		}
// 	} else {
// 		query = {
// 			filter: JSON.stringify(filter[0]),
// 		}
// 	}

// 	return query
// }

const getQuery = (queryFilterParsed: Record<string, any>) => {
	const filter: Record<string, any>[] = []
	const sort: Record<string, any>[] = []

	const handleColorFilter = (colors: string) => {
		const colorIds = colors.split(',').map((color: string) => Colors[color as keyof typeof Colors])
		filter.push({ 'productOptions.color': colorIds })
	}

	const handlePriceFilter = (priceRange: string) => {
		const [min, max] = priceRange.split(',')
		filter.push({ 'priceData.price': { $gte: parseInt(min) } }, { 'priceData.price': { $lte: parseInt(max) } })
	}

	const handleSort = (sortValue: string) => {
		const [field, order] = sortValue.split('-')
		sort.push({ [field]: order })
	}

	for (const key in queryFilterParsed) {
		const value = queryFilterParsed[key]
		if (key === 'color') {
			handleColorFilter(value)
		} else if (key === 'price') {
			handlePriceFilter(value)
		} else if (key === 'sort') {
			handleSort(value)
		} else {
			filter.push({ [`productOptions.${key}`]: value.split(',') })
		}
	}

	const query = Object.hasOwn(queryFilterParsed, 'price')
		? { filter: JSON.stringify({ $and: filter }), sort: JSON.stringify(sort) }
		: { filter: JSON.stringify(filter), sort: JSON.stringify(sort) }

	return query
}
