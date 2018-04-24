import { combineReducers } from 'redux';
import ItemReducers from './ItemReducer';
import FilterReducer from './filterItem';
import Search from './search';


const appReducers = combineReducers({
    ItemReducers,
    FilterReducer,
    Search
})

export default appReducers;