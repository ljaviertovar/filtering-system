import { fetchData } from '@/lib/fetch-data'
import { Colors } from '@/types.td'

const WIX_URL = 'https://www.wixapis.com/stores/v1/'

export async function POST(request: Request) {
	try {
		const req = await request.json()
		const queryFilterParsed = JSON.parse(req.queryFilter)

		let filter: Record<string, any>[] = []
		for (const key in queryFilterParsed) {
			if (key === 'color') {
				const colors = queryFilterParsed[key].split(',')
				const colorIds = colors.map((color: keyof typeof Colors) => Colors[color])

				filter = [...filter, { [`productOptions.${key}`]: colorIds }]
			} else if (key === 'price') {
				const [min, max] = queryFilterParsed[key].split(',')
				filter = [
					...filter,
					{
						[`priceData.${key}`]: { $gte: parseInt(min) },
					},
					{
						[`priceData.${key}`]: { $lte: parseInt(max) },
					},
				]
			} else {
				filter = [...filter, { [`productOptions.${key}`]: queryFilterParsed[key].split(',') }]
			}
		}

		console.log(
			JSON.stringify({
				query: {
					filter: JSON.stringify({ $and: filter }),
				},
			})
		)

		const data = await fetchData(`${WIX_URL}products/query`, {
			method: 'POST',
			headers: {
				Authorization: process.env.NEXT_WIX_API_KEY,
				'wix-site-id': process.env.NEXT_WIX_SITE_ID,
			},
			body: JSON.stringify({
				query: {
					filter: JSON.stringify({ $and: filter }),
				},
			}),
		})

		return Response.json(data)
	} catch (error) {
		console.error('Error fetching products:', error)
		return Response.json({ error: 'Failed to fetch products' }, { status: 500 })
	}
}
