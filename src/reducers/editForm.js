const EditFormDefault = {
    showForm : true,
    valueEdit : ''
}


const EditReducer = (state = EditFormDefault, action) => {
    switch (action.type) {
        case 'SHOW_EDIT_FORM':
            console.log(state);
            return 'all'

        default:
            return state
        }
}

export default EditReducer