import { NextRequest, NextResponse } from 'next/server'

import { fetchData } from '@/lib/fetch-data'

const WIX_URL = 'https://www.wixapis.com/stores/v1/'

export async function POST(request: NextRequest) {
	console.log({ request })
	try {
		const data = await fetchData(`${WIX_URL}products/query`, {
			method: 'POST',
			headers: {
				Authorization: process.env.NEXT_WIX_API_KEY,
				'wix-site-id': process.env.NEXT_WIX_SITE_ID,
			},
			body: JSON.stringify({
				query: {
					filter: '{"productOptions.size": "L"}}',
				},
			}),
		})

		console.log({ data })

		return NextResponse.json(data)
	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
	}
}
