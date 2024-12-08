import { NextResponse } from 'next/server'
import { fetchProductsFromDummy } from '@/lib/api-products'

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)

	const category = searchParams.get('category')
	const priceMin = searchParams.get('priceMin')
	const priceMax = searchParams.get('priceMax')

	try {
		// Fetch products from dummy API or database
		const products = await fetchProductsFromDummy({
			category: category || undefined,
			priceMin: priceMin ? Number(priceMin) : undefined,
			priceMax: priceMax ? Number(priceMax) : undefined,
		})

		return NextResponse.json({ products })
	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
	}
}
