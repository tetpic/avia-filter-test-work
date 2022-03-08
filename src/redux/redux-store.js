import {combineReducers, createStore} from 'redux';
import searchReducer from "./search-reducer"
import resultReducer from './results-reducer';
import filterReducer from './filter-reducer';




const reducers = combineReducers({
    searchReducer,
    resultReducer,
    filterReducer,
}) 

let store = createStore(reducers )

window.store = store;
export default store