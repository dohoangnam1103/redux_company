const EditFormDefault = {
    showForm : false,
    idEdit: ''
}


const EditReducer = (state = EditFormDefault, action) => {
    switch (action.type) {
        case 'SHOW_EDIT_FORM':
            return {...state, showForm : true, idEdit:action.id}

        case 'HIDE_EDIT_FORM':
            return {...state, showForm : false}

        default:
            return state
        }
}

export default EditReducer