import { combineReducers } from 'redux';
import ItemReducers from './ItemReducer';
import FilterReducer from './filterItem';
import Search from './search';
import EditReducer from './editForm';
import fetchData from './fetchData';


const appReducers = combineReducers({
    ItemReducers,
    FilterReducer,
    Search,
    EditReducer,
    fetchData
})

export default appReducers;