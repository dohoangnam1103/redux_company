
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

// export const actFetchEdit = (id, content, status) => {
//     return (dispatch) => {
//         fetch(linkData + '/' + id,{
//             method: 'PUT', body : JSON.stringify(
//                 {   
//                     id: id,
//                     name: content,
//                     status: status
//                 }),
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             }
//         }).then(()=>{dispatch(actEdit(id, content))}).catch((e)=> console.log(e));;
//     }
// }

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

export const actFetchData = (data) => {
    return {
        type: 'FETCH_DATA', 
        content: data
    }
}

export const actShowEditForm = (id) => {
    return {
        type: 'SHOW_EDIT_FORM',
        id: id
    }
}

export const actHideEditForm = () => {
    return {
        type: 'HIDE_EDIT_FORM'
    }
}

export const actStartChangeStatus = (id, name, status) => {
    return {
        type : 'START_CHANGE_STATUS',
        payload: {id : id, name: name, status: status}
    }
} 

export const actStartEditItem = (id, name, status) => {
    return {
        type : 'START_EDIT_ITEM',
        payload: {id : id, name: name, status: status}
    }
} 

export const actStartDeleteItem = (id) => {
    return {
        type : 'START_DELETE',
        payload: {id : id}
    }
} 

export const actStartAddItem = (id, content, status) => {
    return {
        type : 'START_ADD',
        payload: {id: id, name:content, status: status}
    }
} 