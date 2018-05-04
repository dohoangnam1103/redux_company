const keySearch = ''


const Search = (state = keySearch, action) => {
    switch (action.type) {
        case 'SEARCH':
            return action.keySearch

        case 'RESET_SEARCH':
            return ''

        default:
            return state
        }
}

export default Search