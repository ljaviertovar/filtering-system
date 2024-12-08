export default function SearchResult({ data, isLoading }: { data: any; isLoading: boolean }) {
	if (isLoading) return <div>Loading...</div>
	if (!data?.length) return <div>No products found</div>

	return (
		<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
			{data.map((product: any) => (
				<div key={product.id}>{product.title}</div>
			))}
		</div>
	)
}
