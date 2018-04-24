const ListItem = [
    {id: 1, name: 'coding', status: false},
    {id: 2, name: 'watchTV123', status: false},
    {id: 3, name: 'game', status: true}
]


const ItemReducers = (state = ListItem, action) => {
    switch (action.type) {
        case 'CHANGE_STATUS':
            return state.map(item => (item.id === action.id ) ? {...item, status: !item.status}: item );

        case 'ADD_ITEM':
            return [...state, { id: action.id, name: action.name, status: false}];

        case 'DELETE_ITEM':
            return state.filter(item => item.id !== action.id);

        default:
            return state
        }
}

export default ItemReducers