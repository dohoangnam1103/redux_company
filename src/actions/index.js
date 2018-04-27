const linkData = 'https://5aded024bf932f0014d11afd.mockapi.io/api/v1/todo';

export const actAddItem = (id, content, status) => {
    return {
        type: 'ADD_ITEM',
        id: id, 
        name: content, 
        status: status
    }
}

export const actChangeStatus = (id) => {
    return {
        type: 'CHANGE_STATUS',
        id: id
    }
}


export  const actDeleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        id: id
    }
}

export const actFetchEdit = (id, content, status) => {
    return (dispatch) => {
        fetch(linkData + '/' + id,{
            method: 'PUT', body : JSON.stringify(
                {   
                    id: id,
                    name: content,
                    status: status
                }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(()=>{dispatch(actEdit(id, content))}).catch((e)=> console.log(e));;
    }
}

export const actEdit = (id, name) => {
    return {
        type: 'EDIT_ITEM',
        id: id,
        name: name
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