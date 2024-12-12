export default function SearchResult({ data, isLoading }: { data: any; isLoading: boolean }) {
	if (isLoading) return <div>Loading...</div>
	if (!data?.products?.length) return <div>No products found</div>

	return (
		<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
			{data.products.map((product: any) => (
				<div key={product.id}>{product.name}</div>
			))}
		</div>
	)
}
