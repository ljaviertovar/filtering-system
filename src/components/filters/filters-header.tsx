import FilterSort from './filters-sort'
import FilterSheet from './filters-sheet'

export default function FiltersHeader() {
	return (
		<div className='w-full max-w-7xl mx-auto flex justify-between items-center py-2 '>
			<FilterSheet />
			<FilterSort />
		</div>
	)
}
