interface Props {
	product: { id: string; name: string }
}

export default function ProductCard({ product }: Props) {
	return <div>{product.name}</div>
}
