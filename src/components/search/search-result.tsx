import { ProductCard } from '../products'

interface Props {
	data: any
	isLoading: boolean
}

export default function SearchResult({ data, isLoading }: Props) {
	if (isLoading) return <div>Loading...</div>
	if (!data?.products?.length) return <div>No products found</div>

	return (
		<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
			{data.products.map((product: any) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	)
}
