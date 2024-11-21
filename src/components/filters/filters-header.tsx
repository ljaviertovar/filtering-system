import FilterSort from './filters-sort'
import FilterSheet from './filters-sheet'

export default function FiltersHeader() {
	return (
		<div className='w-full mx-auto flex justify-between md:justify-end items-center py-2 '>
			<FilterSheet />
			<FilterSort />
		</div>
	)
}
