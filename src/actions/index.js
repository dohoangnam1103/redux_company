
export const actAddItem = (id, content, status) => {
    return {
        type: 'ADD_ITEM',
        id: id, 
        name: content, 
        status: status
    }
}

export const actFilterAll = () => {
    return {
        type: 'FILTER_ALL'
    }
}

export const actFilterComplete = () => {
    return {
        type: 'FILTER_COMPLETE'
    }
}

export const actFilterActive = () => {
    return {
        type: 'FILTER_ACTIVE'
    }
}

export const actChangeStatus = (id) => {
    return {
        type: 'CHANGE_STATUS',
        id: id
    }
}

export const actDeleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        id: id
    }
}

export const actSearch = (key) => {
    return {
        type: 'SEARCH',
        keySearch: key
    }
}

export const actResetSearch = () => {
    return {
        type: 'RESET_SEARCH'
    }
}


