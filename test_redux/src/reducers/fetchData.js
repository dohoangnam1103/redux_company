const statusFetch = {}


const fetchData = (state = statusFetch, action) => {
    switch (action.type) {
        case 'START_FETCH':
            console.log('start');
            return state

        case 'FETCH_DONE':
            console.log('done');
            return state

        case 'FETCH_ERROR':
            console.log('error');
            return state

        default:
            return state
        }
}

export default fetchData