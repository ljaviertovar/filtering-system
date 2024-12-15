import { fetchData } from '@/lib/fetch-data'

const WIX_URL = 'https://www.wixapis.com/stores/v1/'

export async function POST(request: Request) {
	try {
		const req = await request.json()

		const filter = {
			'productOptions.size': req.filters.size,
		}

		const data = await fetchData(`${WIX_URL}products/query`, {
			method: 'POST',
			headers: {
				Authorization: process.env.NEXT_WIX_API_KEY,
				'wix-site-id': process.env.NEXT_WIX_SITE_ID,
			},
			body: JSON.stringify({
				query: {
					filter: JSON.stringify(filter),
				},
			}),
		})

		return Response.json(data)
	} catch (error) {
		console.error('Error fetching products:', error)
		return Response.json({ error: 'Failed to fetch products' }, { status: 500 })
	}
}
