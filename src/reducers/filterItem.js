const ListItemFilter = 'all'


const FilterReducer = (state = ListItemFilter, action) => {
    switch (action.type) {
        case 'FILTER_ALL':
            return 'all'

        case 'FILTER_COMPLETE':
            return 'complete'

        case 'FILTER_ACTIVE':
            return 'active'
        

        default:
            return state
        }
}

export default FilterReducer