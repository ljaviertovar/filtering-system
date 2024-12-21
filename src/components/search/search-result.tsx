import { memo } from 'react'
import { Empty } from '.'
import { ProductCard } from '../products'
import { Skeleton } from '../ui/skeleton'

interface Props {
	data: any
	isLoading: boolean
}

export default function SearchResult({ data, isLoading }: Props) {
	if (!isLoading && !data?.products?.length) return <Empty />

	return (
		<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
			{isLoading ? (
				<SkeletonCards />
			) : (
				<>
					{data.products.map((product: any) => (
						<ProductCard key={product.id} product={product} />
					))}
				</>
			)}
		</div>
	)
}

const SkeletonCards = memo(() => (
	<>
		{Array.from({ length: 12 }).map((_, index) => (
			<div key={`skeleton${index}}`} className='flex flex-col space-y-3 p-2'>
				<Skeleton className='h-60 w-60 rounded-xl' />
				<div className='space-y-2'>
					<Skeleton className='h-6 w-[250px]' />
					<Skeleton className='h-6 w-[200px]' />
					<Skeleton className='h-8 w-[250px]' />
				</div>
			</div>
		))}
	</>
))
