import { memo } from 'react'
import { Empty } from '.'
import { ProductCard } from '../products'
import { Skeleton } from '../ui/skeleton'
import { Card } from '../ui/card'

interface Props {
	data: any
	isLoading: boolean
}

export default function SearchResult({ data, isLoading }: Props) {
	if (!isLoading && !data?.products?.length) return <Empty />

	return (
		<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
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
			<Card key={index} className='space-y-2 rounded-md border-none shadow-none'>
				<Skeleton className='w-full h-60' />
				<Skeleton className='w-full h-10' />
				<Skeleton className='w-full h-6' />
				<Skeleton className='w-full h-6' />
			</Card>
		))}
	</>
))

SkeletonCards.displayName = 'SkeletonCards'
