import { combineReducers } from 'redux';
import ItemReducers from './ItemReducer';
import FilterReducer from './filterItem';
import Search from './search';
import EditReducer from './editForm';


const appReducers = combineReducers({
    ItemReducers,
    FilterReducer,
    Search,
    EditReducer
})

export default appReducers;