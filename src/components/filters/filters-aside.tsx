import { FiltersItems } from '.'

export default function FiltersAside() {
	return (
		<>
			<div className='flex items-center h-12 py-2'>
				<span className='text-sm text-muted-foreground'>Filter by:</span>
			</div>

			<FiltersItems />
		</>
	)
}
