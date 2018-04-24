let ListItem = [];
const linkData = 'https://5aded024bf932f0014d11afd.mockapi.io/api/v1/todo';
        

const ItemReducers = (state = ListItem, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return action.content;

        case 'CHANGE_STATUS':
            return state.map(item => {
                if (item.id === action.id ) {
                    fetch(linkData + '/' + action.id,{
                        method: 'PUT', body : JSON.stringify(
                            {   
                                id: item.id,
                                name: item.name,
                                status: !item.status
                            }),
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        }
                    });
                    return {...item, status: !item.status}
                } else {
                    return item
                }
            });

        case 'ADD_ITEM':
            fetch(linkData ,{
                method: 'POST', body : JSON.stringify(
                    {   
                        id: action.id,
                        name: action.name,
                        status: false
                    }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });

            return [...state, { id: action.id, name: action.name, status: false}];

        case 'DELETE_ITEM':
            fetch(linkData + '/' + action.id ,{method: 'DELETE'});
            return state.filter(item => item.id !== action.id);

        default:
            return state
        }
}

export default ItemReducers