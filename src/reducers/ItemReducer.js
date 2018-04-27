let ListItem = [];
      

const ItemReducers = (state = ListItem, action) => {
    switch (action.type) {

        case 'FETCH_DATA':
            return action.content;

        case 'CHANGE_STATUS':
            return state.map(item => {
                if (item.id === action.id ) {
                    return {...item, status: !item.status}
                } else {
                    return item
                }

            });

        case 'ADD_ITEM':
            return [...state, { id: action.id, name: action.name, status: false}];

        case 'DELETE_ITEM':
            return state.filter(item => item.id !== action.id);

        case 'EDIT_ITEM':
            return state.map(item => {
                if (item.id === action.id ) {
                    return {...item, name: action.name}
                } else {
                    return item
                }
            });

        default:
            return state
        }
}

export default ItemReducers