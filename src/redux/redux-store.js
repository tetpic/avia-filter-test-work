import {combineReducers, createStore} from 'redux';
import resultReducer from './results-reducer';
import filterReducer from './filter-reducer';




const reducers = combineReducers({
    resultReducer,
    filterReducer,
}) 

let store = createStore(reducers )

window.store = store;
export default store