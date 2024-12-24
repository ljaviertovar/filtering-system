'use client'

import Image from 'next/image'
import { Button } from '../ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'

import { Product } from '@/types.td'

interface Props {
	product: Product
}

export default function ProductCard({ product }: Props) {
	return (
		<Card className='rounded-md border-muted shadow-none'>
			<CardHeader className='p-2'>
				<Image
					src={product.media.mainMedia.image.url}
					alt={product.media.mainMedia.title}
					width={240}
					height={240}
					className='rounded-sm object-cover w-60 h-60'
				/>
			</CardHeader>
			<CardContent className='py-0 px-2 flex flex-col justify-between items-center gap-2'>
				<h3 className='leading-tight tracking-tighter text-center  h-10'>{product.name}</h3>

				<span className='font-semibold'>{product.priceData.formatted.price}</span>
			</CardContent>
			<CardFooter className='p-2 justify-center items-center'>
				<Button size={'sm'} className=' bg-black hover:bg-black/80 uppercase'>
					Add to cart
				</Button>
			</CardFooter>
		</Card>
	)
}
